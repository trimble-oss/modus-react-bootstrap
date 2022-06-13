import React, { useCallback, useContext, useEffect, useRef } from "react"
import merge from "lodash/merge"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ColumnInstance } from "react-table"
import { DataTableDragDropContext } from "./DataTableDragdropProvider"
import { DATATABLE_CHECKBOX_SELECTOR_ID } from "./DataTableHelpers"
import DataTableContextMenuProvider, {
  DataTableHeaderContextMenu,
} from "./DataTableContextMenuProvider"

export interface DataTableHeaderCellProps
  extends React.HTMLProps<HTMLTableCellElement> {
  header: any
  onToggleHideColumn: (columnId: string, hide: boolean) => void
}

const modusSortArrows = {
  asc: {
    icon: "sort_alpha_up",
    title: "Sort Descending",
  },
  desc: {
    icon: "sort_alpha_down",
    title: "Sort Ascending",
  },
}
type SortIconComponentProps = {
  sort: string
  title?: string
  className?: string
}
const SortIcon: React.FunctionComponent<SortIconComponentProps> = ({
  sort,
  title,
  className,
}) => (
  <i
    className={classNames("modus-icons material-icons", className)}
    data-toggle="tooltip"
    data-placement="top"
    title={title || modusSortArrows[sort].title}
  >
    {modusSortArrows[sort].icon}
  </i>
)

const DataTableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  DataTableHeaderCellProps
>(({ header, onToggleHideColumn, children, className, ...props }, ref) => {
  const resolvedRef = (ref ||
    useRef<HTMLTableCellElement>(
      null
    )) as React.MutableRefObject<HTMLTableCellElement>

  const { onHeaderDragStart, registerColumn } = useContext(
    DataTableDragDropContext
  )
  const { onHeaderContextMenu } = useContext(DataTableHeaderContextMenu)

  const allowDrag =
    header.allowDrag && header.id !== DATATABLE_CHECKBOX_SELECTOR_ID

  useEffect(() => {
    if (registerColumn && header.id && resolvedRef.current) {
      registerColumn(header.id, resolvedRef.current)
    }
  }, [header.id, resolvedRef.current, registerColumn])

  // handle right-click
  const handleContextMenuClick = useCallback(
    event => {
      event.preventDefault()
      onHeaderContextMenu(event, header.id)
    },
    [onHeaderContextMenu, header.id]
  )

  const handleShowHiddenColumn = useCallback(
    event => {
      onToggleHideColumn(header.id, false)
    },
    [onToggleHideColumn, header.id]
  )

  if (!header.isVisible) {
    return (
      <div className="hidden-column">
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          onClick={handleShowHiddenColumn}
        >
          <i className="modus-icons triangle_left">triangle_left</i>
          <i className="modus-icons triangle_right">triangle_right</i>
        </div>
      </div>
    )
  } else {
    const headerLabel = header.render("Header")
    const headerProps = merge(
      header.getHeaderProps(
        header.getSortByToggleProps && header.getSortByToggleProps()
      ),
      {
        style: {
          flex: header.width ? `${header.width} 0 auto` : undefined,
        },
        title: "",
      }
    )

    return (
      <th
        className={classNames(
          "pr-2",
          className,
          allowDrag && "draggable",
          header.id === "selector" && "icon-only"
        )}
        ref={resolvedRef}
        onContextMenu={handleContextMenuClick}
        onMouseDown={e => allowDrag && onHeaderDragStart(e, header)}
        {...headerProps}
        {...props}
      >
        <div className="d-flex w-100 h-100 align-items-center th-content">
          <div
            className="flex-grow-1 overflow-hidden"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
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
                    sort={header.isSortedDesc ? "desc" : "asc"}
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
    )
  }
})

DataTableHeaderCell.propTypes = {
  header: PropTypes.object.isRequired,
  onToggleHideColumn: PropTypes.func.isRequired,
}

DataTableHeaderCell.displayName = "DataTableHeaderCell"

export default DataTableHeaderCell
