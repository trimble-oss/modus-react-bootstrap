import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  CSSProperties,
} from "react"
import PropTypes from "prop-types"
import useForceUpdate from "@restart/hooks/useForceUpdate"
import renderUsingPortal from "./renderUsingPortal"

const POSITION = { x: 0, y: 0 }

function getNewColumnOrder(columnIds, dragColumnId, dropColumnId): any[] {
  let newColumnOrder = columnIds
  newColumnOrder.splice(columnIds.indexOf(dragColumnId), 1)
  newColumnOrder.splice(newColumnOrder.indexOf(dropColumnId), 0, dragColumnId)

  return newColumnOrder
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
      position: "fixed",
      cursor: dragState.isDragging ? "-webkit-grabbing" : "-webkit-grab",
      visibility: dragState.visible ? "visible" : "hidden",
      opacity: "0.9",
    }
    const dragContentStyle: CSSProperties = {
      width: dragState.width,
      height: dragState.height,
    }

    return (
      <div style={dragContainerStyle}>
        {dragItemTemplate ? (
          dragItemTemplate(dragState.column)
        ) : (
          <div style={dragContentStyle} className="bg-gray-light p-2">
            {dragState.column.render("Header")}
          </div>
        )}
      </div>
    )
  }

  return <></>
}

function isWithInBounds(boundingClientRect, x, y) {
  if (boundingClientRect) {
    const inVerticalBounds =
      y >= boundingClientRect.top && y <= boundingClientRect.bottom
    const inHorizontalBounds =
      x >= boundingClientRect.left && x <= boundingClientRect.right
    return inVerticalBounds && inHorizontalBounds
  }
  return false
}

export const DataTableDragDropContext = React.createContext<{
  dragColumnId: any
  onHeaderDragStart: (event: any, column: any) => void
  registerColumn: (id: string, ref: any) => void
}>(null)

export default function DataTableDragdropProvider(props) {
  const {
    children,
    visibleColumns,
    setColumnOrder,
    dragItemTemplate,
    attachTo,
  } = props

  const forceUpdate = useForceUpdate()
  const registeredColumns = useRef<{ id: string; ref: any }[]>([])
  const droppingState = useRef<{
    column: { id: string; ref: any }
    validTarget: boolean
  }>({
    column: null,
    validTarget: false,
  })
  const draggingState = useRef({
    isDragging: false,
    visible: false,
    origin: POSITION,
    translation: POSITION,
    width: "0px",
    height: "0px",
    column: null,
    columnOrder: visibleColumns.map(d => d.id),
  })

  useEffect(() => {
    if (draggingState.current.isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [draggingState.current.isDragging])

  function clearDroppingState() {
    const prevDropState = droppingState.current
    if (droppingState.current.column) {
      droppingState.current.column.ref.classList.remove("drop-allow")
      droppingState.current.column.ref.classList.remove("drop-block")
    }
    droppingState.current = { column: null, validTarget: false }
    return prevDropState
  }
  const getDroppableColumn = useCallback(
    (x, y) => {
      const column = registeredColumns.current.find(({ ref }) => {
        const rect = ref.getBoundingClientRect()
        return isWithInBounds(rect, x, y)
      })
      return column
    },
    [registeredColumns.current]
  )

  const registerColumn = useCallback((id: string, ref: any) => {
    let refs = registeredColumns.current
      ? registeredColumns.current.filter(col => col.id !== id)
      : []
    refs.push({ id, ref })
    registeredColumns.current = refs
  }, [])

  const handleMouseDown = useCallback(
    (event, column) => {
      const { clientX, clientY, target, nativeEvent } = event
      if (nativeEvent.which !== 1) return

      const prevDragState = draggingState.current
      clearDroppingState()
      draggingState.current = {
        ...prevDragState,
        isDragging: true,
        origin: { x: clientX, y: clientY },
        column,
        width:
          (target && target.offsetParent && target.offsetParent.width) ||
          "80px",
        height:
          (target && target.offsetParent && target.offsetParent.height) ||
          "3rem",
        columnOrder: visibleColumns.map(d => d.id),
      }
      forceUpdate()
    },
    [draggingState.current, visibleColumns]
  )

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      clearDroppingState()
      const prevDragState = draggingState.current
      const translation = {
        x: clientX,
        y: clientY,
      }
      if (!prevDragState.column) return

      let droppableColumn = getDroppableColumn(clientX, clientY)
      if (droppableColumn) {
        let column = visibleColumns.find(d => d.id === droppableColumn.id)
        const isDroppable =
          column.allowDrop ||
          (column.allowDropForColumns || []).includes(prevDragState.column.id)

        droppingState.current.column = droppableColumn
        droppingState.current.validTarget = isDroppable
        droppableColumn.ref.classList.add(
          isDroppable ? "drop-allow" : "drop-block"
        )
      }
      draggingState.current = {
        ...prevDragState,
        visible: true,
        translation,
      }
      forceUpdate()
    },
    [draggingState.current]
  )

  const handleMouseUp = useCallback(
    event => {
      const prevDragState = draggingState.current
      const prevDropState = droppingState.current

      if (
        prevDropState.validTarget &&
        prevDropState.column &&
        prevDropState.column.id !== prevDragState.column.id
      ) {
        let columnIds = getNewColumnOrder(
          prevDragState.columnOrder,
          prevDragState.column.id,
          prevDropState.column.id
        )
        setColumnOrder(columnIds)
      }

      draggingState.current = {
        ...prevDragState,
        isDragging: false,
        visible: false,
        translation: POSITION,
        column: null,
      }
      clearDroppingState()
      forceUpdate()
    },
    [draggingState.current, droppingState.current, setColumnOrder]
  )

  const value = useMemo(
    () => ({
      dragColumnId: draggingState.current.column
        ? draggingState.current.column.id
        : null,
      onHeaderDragStart: handleMouseDown,
      registerColumn,
    }),
    [draggingState.current.column, handleMouseDown, registerColumn]
  )

  return (
    <DataTableDragDropContext.Provider value={value}>
      {children}
      {draggingState.current.isDragging &&
        renderUsingPortal(
          getDragContent(draggingState.current, dragItemTemplate),
          attachTo
        )}
    </DataTableDragDropContext.Provider>
  )
}

DataTableDragdropProvider.propTypes = {
  children: PropTypes.node,
  attachTo: PropTypes.any.isRequired,
  visibleColumns: PropTypes.any.isRequired,
  setColumnOrder: PropTypes.func.isRequired,
  dragItemTemplate: PropTypes.func.isRequired,
  registeredColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ref: PropTypes.any.isRequired,
    })
  ).isRequired,
}
