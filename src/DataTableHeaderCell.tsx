/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useCallback, useContext, useEffect, useRef } from 'react';
import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DataTableDragDropContext } from './DataTableDragdropProvider';
import { DataTableHeaderContextMenu } from './DataTableContextMenuProvider';
import {
  DATATABLE_CHECKBOX_SELECTOR_ID,
  getFlexColumnStyles,
} from './DataTableHelpers';

export interface DataTableHeaderCellProps
  extends React.HTMLProps<HTMLTableCellElement> {
  header: any;
  onToggleHideColumn: (columnId: string, hide: boolean) => void;
}

const modusSortArrows = {
  asc: {
    icon: 'sort_alpha_up',
    title: 'Sort Descending',
  },
  desc: {
    icon: 'sort_alpha_down',
    title: 'Sort Ascending',
  },
};
type SortIconComponentProps = {
  sort: string;
  title?: string;
  className?: string;
};
const SortIcon: React.FunctionComponent<SortIconComponentProps> = ({
  sort,
  title,
  className,
}) => (
  <i
    className={classNames('modus-icons material-icons', className)}
    data-toggle="tooltip"
    data-placement="top"
    title={title || modusSortArrows[sort].title}
  >
    {modusSortArrows[sort].icon}
  </i>
);

const DataTableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  DataTableHeaderCellProps
>(({ header, onToggleHideColumn, className, ...props }, ref) => {
  const defaultRef = useRef<HTMLTableCellElement>(null);
  const resolvedRef = (ref ||
    defaultRef) as React.MutableRefObject<HTMLTableCellElement>;

  const dragDropContext = useContext(DataTableDragDropContext);
  const contextMenu = useContext(DataTableHeaderContextMenu);
  const { onHeaderDragStart, registerColumn } = dragDropContext || {};
  const { onHeaderContextMenu } = contextMenu || {};

  const allowDrag =
    header.allowDrag && header.id !== DATATABLE_CHECKBOX_SELECTOR_ID;

  useEffect(() => {
    if (registerColumn && header.id && resolvedRef.current) {
      registerColumn(header.id, resolvedRef.current);
    }
  }, [header.id, registerColumn, resolvedRef]);

  // handle right-click
  const handleContextMenuClick = useCallback(
    (event) => {
      event.preventDefault();
      if (onHeaderContextMenu) onHeaderContextMenu(event, header.id);
    },
    [onHeaderContextMenu, header.id],
  );

  const handleShowHiddenColumn = useCallback(() => {
    onToggleHideColumn(header.id, false);
  }, [onToggleHideColumn, header.id]);

  const handleMouseDown = useCallback(
    (event) => {
      if (onHeaderDragStart && allowDrag) onHeaderDragStart(event, header);
    },
    [onHeaderDragStart, allowDrag, header],
  );

  if (!header.isVisible) {
    return (
      <th className="hidden-column">
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          onClick={handleShowHiddenColumn}
          role="group"
          aria-label="Show hidden columns"
        >
          <i className="modus-icons triangle_left" role="button">
            triangle_left
          </i>
          <i className="modus-icons triangle_right" role="button">
            triangle_right
          </i>
        </div>
      </th>
    );
  }
  const headerLabel = header.render('Header');
  const headerProps = merge(
    header.getHeaderProps(
      header.getSortByToggleProps && header.getSortByToggleProps(),
    ),
    {
      style: getFlexColumnStyles(header),
      title: '',
    },
  );

  return (
    <th
      className={classNames(
        header.id === DATATABLE_CHECKBOX_SELECTOR_ID
          ? 'icon-only checkbox-selector-cell'
          : 'pr-2',
        allowDrag && 'draggable',
        header.isResizing && 'resizing',
        className,
      )}
      ref={resolvedRef}
      onContextMenu={handleContextMenuClick}
      {...headerProps}
      {...props}
    >
      <div
        className="d-flex w-100 h-100 align-items-center th-content"
        onMouseDown={handleMouseDown}
        role="columnheader"
        tabIndex={0}
      >
        <div
          className="flex-grow-1 overflow-hidden"
          style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
          data-toggle="tooltip"
          data-placement="top"
          title={headerLabel}
        >
          {headerLabel}
        </div>
        <div>
          {header.canSort && (
            <>
              {header.isSorted ? (
                <SortIcon
                  className="sorted"
                  sort={header.isSortedDesc ? 'desc' : 'asc'}
                />
              ) : (
                <SortIcon
                  className="unsorted"
                  title="Sort Ascending"
                  sort="asc"
                />
              )}
            </>
          )}
        </div>
      </div>

      {header.getResizerProps && (
        <div {...header.getResizerProps()} className="table-col-resizable" />
      )}
    </th>
  );
});

DataTableHeaderCell.propTypes = {
  header: PropTypes.object.isRequired,
  onToggleHideColumn: PropTypes.func.isRequired,
};

DataTableHeaderCell.displayName = 'DataTableHeaderCell';

export default DataTableHeaderCell;
