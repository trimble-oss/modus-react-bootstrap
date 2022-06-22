/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  CSSProperties,
} from 'react';
import PropTypes from 'prop-types';
import useForceUpdate from '@restart/hooks/useForceUpdate';
import { ColumnInstance } from 'react-table';
import renderUsingPortal from './renderUsingPortal';

type Position = { x: number; y: number };
type RegisteredColumn = { id: string; ref: any };
type DropState = {
  column: RegisteredColumn | null;
  validTarget: boolean;
};
type DragState = {
  isDragging: boolean;
  visible: boolean;
  origin: { x: number; y: number };
  translation: { x: number; y: number };
  width: string | number;
  height: string | number;
  column: ColumnInstance<any> | null;
  columnOrder: Array<any>;
};
const POSITION: Position = { x: 0, y: 0 };

function getNewColumnOrder(columnIds, dragColumnId, dropColumnId): any[] {
  const newColumnOrder = columnIds;
  newColumnOrder.splice(columnIds.indexOf(dragColumnId), 1);
  newColumnOrder.splice(newColumnOrder.indexOf(dropColumnId), 0, dragColumnId);

  return newColumnOrder;
}

function getDragContent(dragState, dragItemTemplate) {
  if (dragState.isDragging && dragState.column) {
    const dragContainerStyle: CSSProperties = {
      width: dragState.width,
      height: dragState.height,
      transform: `translate(calc(${dragState.translation.x}px - 10%), calc(${dragState.translation.y}px - 50%))`,
      msTransform: `translateX(${dragState.translation.x}px) translateX(-10%) translateY(${dragState.translation.y}px) translateY(-50%)`,
      zIndex: 9999,
      left: 0,
      top: 0,
      position: 'fixed',
      cursor: dragState.isDragging ? '-webkit-grabbing' : '-webkit-grab',
      visibility: dragState.visible ? 'visible' : 'hidden',
      opacity: '0.9',
    };
    const dragContentStyle: CSSProperties = {
      width: dragState.width,
      height: dragState.height,
    };

    return (
      <div style={dragContainerStyle}>
        {dragItemTemplate ? (
          dragItemTemplate(dragState.column)
        ) : (
          <div style={dragContentStyle} className="bg-gray-light p-2">
            {dragState.column.render('Header')}
          </div>
        )}
      </div>
    );
  }

  return <></>;
}

function isWithInBounds(boundingClientRect, x, y) {
  if (boundingClientRect) {
    const inVerticalBounds =
      y >= boundingClientRect.top && y <= boundingClientRect.bottom;
    const inHorizontalBounds =
      x >= boundingClientRect.left && x <= boundingClientRect.right;
    return inVerticalBounds && inHorizontalBounds;
  }
  return false;
}

interface DataTableDragDropContextProps {
  dragColumnId: any;
  onHeaderDragStart: (event: any, column: any) => void;
  registerColumn: (id: string, ref: any) => void;
}
export const DataTableDragDropContext =
  React.createContext<DataTableDragDropContextProps | null>(null);

export default function DataTableDragdropProvider(props) {
  const {
    children,
    visibleColumns,
    setColumnOrder,
    dragItemTemplate,
    attachTo,
  } = props;

  const forceUpdate = useForceUpdate();
  const registeredColumns = useRef<RegisteredColumn[]>([]);
  const droppingState = useRef<DropState>({
    column: null,
    validTarget: false,
  });
  const draggingState = useRef<DragState>({
    isDragging: false,
    visible: false,
    origin: POSITION,
    translation: POSITION,
    width: '0px',
    height: '0px',
    column: null,
    columnOrder: visibleColumns.map((d) => d.id),
  });

  function clearDroppingState() {
    const prevDropState = droppingState.current;
    if (droppingState.current.column) {
      droppingState.current.column.ref.classList.remove('drop-allow');
      droppingState.current.column.ref.classList.remove('drop-block');
    }
    droppingState.current = { column: null, validTarget: false };
    return prevDropState;
  }
  const getDroppableColumn = useCallback((x, y) => {
    const column = registeredColumns.current.find(({ ref }) => {
      const rect = ref.getBoundingClientRect();
      return isWithInBounds(rect, x, y);
    });
    return column;
  }, []);

  const registerColumn = useCallback((id: string, ref: any) => {
    const refs = registeredColumns.current
      ? registeredColumns.current.filter((col) => col.id !== id)
      : [];
    refs.push({ id, ref });
    registeredColumns.current = refs;
  }, []);

  const handleMouseDown = useCallback(
    (event, column) => {
      const { clientX, clientY, target, nativeEvent } = event;
      if (nativeEvent.which !== 1) return;

      const prevDragState = draggingState.current;
      clearDroppingState();
      draggingState.current = {
        ...prevDragState,
        isDragging: true,
        origin: { x: clientX, y: clientY },
        column,
        width:
          (target && target.offsetParent && target.offsetParent.width) ||
          '80px',
        height:
          (target && target.offsetParent && target.offsetParent.height) ||
          '3rem',
        columnOrder: visibleColumns.map((d) => d.id),
      };
      forceUpdate();
    },
    [forceUpdate, visibleColumns],
  );

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      clearDroppingState();
      const prevDragState = draggingState.current;
      const translation = {
        x: clientX,
        y: clientY,
      };
      if (!prevDragState.column) return;

      const droppableColumn = getDroppableColumn(clientX, clientY);
      if (droppableColumn) {
        const column = visibleColumns.find((d) => d.id === droppableColumn.id);
        const isDroppable =
          column.allowDrop ||
          (column.allowDropForColumns || []).includes(prevDragState.column.id);

        droppingState.current.column = droppableColumn;
        droppingState.current.validTarget = isDroppable;
        droppableColumn.ref.classList.add(
          isDroppable ? 'drop-allow' : 'drop-block',
        );
      }
      draggingState.current = {
        ...prevDragState,
        visible: true,
        translation,
      };
      forceUpdate();
    },
    [forceUpdate, getDroppableColumn, visibleColumns],
  );

  const handleMouseUp = useCallback(() => {
    const prevDragState = draggingState.current;
    const prevDropState = droppingState.current;

    if (
      prevDropState.validTarget &&
      prevDropState.column &&
      prevDragState.column &&
      prevDropState.column.id !== prevDragState.column.id
    ) {
      const columnIds = getNewColumnOrder(
        prevDragState.columnOrder,
        prevDragState.column.id,
        prevDropState.column.id,
      );
      setColumnOrder(columnIds);
    }

    draggingState.current = {
      ...prevDragState,
      isDragging: false,
      visible: false,
      translation: POSITION,
      column: null,
    };
    clearDroppingState();
    forceUpdate();
  }, [forceUpdate, setColumnOrder]);

  const value = useMemo(
    () => ({
      dragColumnId: draggingState.current.column
        ? draggingState.current.column.id
        : null,
      onHeaderDragStart: handleMouseDown,
      registerColumn,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggingState.current.column, handleMouseDown, registerColumn],
  );

  useEffect(() => {
    if (draggingState.current.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [draggingState.current.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <DataTableDragDropContext.Provider value={value}>
      {children}
      {draggingState.current.isDragging &&
        renderUsingPortal(
          getDragContent(draggingState.current, dragItemTemplate),
          attachTo,
        )}
    </DataTableDragDropContext.Provider>
  );
}

DataTableDragdropProvider.propTypes = {
  children: PropTypes.node,
  attachTo: PropTypes.any,
  visibleColumns: PropTypes.any.isRequired,
  setColumnOrder: PropTypes.func.isRequired,
  dragItemTemplate: PropTypes.func,
};
