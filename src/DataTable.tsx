import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import {
  useSortBy,
  usePagination,
  useResizeColumns,
  useFlexLayout,
  TableState,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  Filters,
  FilterValue,
  useColumnOrder,
} from "react-table"
import classNames from "classnames"

import { Table, TablePagination, DataTableColumn } from "."
import DataTableDragdropProvider from "./DataTableDragdropProvider"
import DataTableHeaderCell from "./DataTableHeaderCell"
import DataTableStyled from "./DataTableStyled"
import ContextMenu from "./ContextMenu"
import {
  DATATABLE_DEFAULT_PAGE_SIZES,
  checkBoxSelectionHook,
  getCellStyles,
  stateReducer,
} from "./DataTableHelpers"
import useDataTableInstance from "./useDataTableInstance"
import { DataTableColumnInstance } from "./types"
import renderUsingPortal from "./renderUsingPortal"
import DataTableContextMenuProvider from "./DataTableContextMenuProvider"

export interface DataTableProps<T extends Record<string, unknown>>
  extends Omit<React.HTMLProps<HTMLDivElement>, "data" | "size"> {
  id: string
  data: ReadonlyArray<T>
  columns: ReadonlyArray<DataTableColumn<T>>
  striped?: boolean
  bordered?: boolean
  borderless?: boolean
  hover?: boolean
  size?: string
  variant?: string
  responsive?: boolean | string
  pageSize?: number
  pageSizeOptions?: number[]
  resizeColumns?: boolean
  multipleRowSelection?: boolean
  checkBoxRowSelection?: boolean
  disableRowSelectionOnClick?: boolean
  disablePagination?: boolean
  disableSorting?: boolean
  disableFiltering?: boolean
  disableDragging?: boolean
  filterPanel?: (
    columns: DataTableColumnInstance<T>[],
    filters: Filters<T>,
    resetFilter: (columnId: string) => void,
    resetAllFilters: () => void,
    globalFilter: any,
    setGlobalFilter: (filterValue: FilterValue) => void
  ) => React.ReactElement
  dragTemplate?: (column: DataTableColumnInstance<T>) => React.ReactElement
  onRowSelectionChange?: (rows: any[]) => void
}

const propTypes = {
  /** A HTML id attribute, necessary for proper form accessibility. */
  id: PropTypes.string.isRequired,

  /**
   * An array of column data of type `DataTableColumn` for the Table Headers.
   */
  columns: PropTypes.array.isRequired,

  /**
   * Default page size if pagination is enabled.
   */
  pageSize: PropTypes.number,

  /**
   * An array of page size options if pagination is enabled.
   */
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

  /**
   * An array of data for the Table Rows.
   */
  data: PropTypes.array.isRequired,

  /**
   * Enables column resizing.
   */
  resizeColumns: PropTypes.bool,

  /**
   * Enables checkbox to select the rows.
   */
  checkBoxRowSelection: PropTypes.bool,

  /**
   * Enables multiple row selection.
   */
  multipleRowSelection: PropTypes.bool,

  /**
   * Disables on-click row selection.
   */
  disableRowSelectionOnClick: PropTypes.bool,

  /**
   * Displays all the rows and hides pagination panel.
   */
  disablePagination: PropTypes.bool,

  /**
   * Removes sorting icons from the column header.
   */
  disableSorting: PropTypes.bool,

  /**
   * Removes filter panel.
   */
  disableFiltering: PropTypes.bool,

  /**
   * Disables dragging function on Table headers.
   */
  disableDragging: PropTypes.bool,

  /**
   * Adds zebra-striping to any table row within the `<tbody>`.
   */
  striped: PropTypes.bool,

  /**
   * Adds borders on all sides of the table and cells.
   */
  bordered: PropTypes.bool,

  /**
   * Removes all borders on the table and cells, including table header.
   */
  borderless: PropTypes.bool,

  /**
   * Enable a hover state on table rows within a `<tbody>`.
   */
  hover: PropTypes.bool,

  /**
   * Make tables more compact by cutting cell padding in half by setting
   * size as `sm`.
   */
  size: PropTypes.string,

  /**
   * Invert the colors of the table — with light text on dark backgrounds
   * by setting variant as `dark`.
   */
  variant: PropTypes.string,

  /**
   * Responsive tables allow tables to be scrolled horizontally with ease.
   * Across every breakpoint, use `responsive` for horizontally
   * scrolling tables. Responsive tables are wrapped automatically in a `div`.
   * Use `responsive="sm"`, `responsive="md"`, `responsive="lg"`, or
   * `responsive="xl"` as needed to create responsive tables up to
   * a particular breakpoint. From that breakpoint and up, the table will
   * behave normally and not scroll horizontally.
   */
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Callback when rows selected or unselected.
   *
   * ```js
   * function onRowSelectionChange (rows: any[]) => void
   * ```
   */
  onRowSelectionChange: PropTypes.func,

  /**
   * Function that returns a custom filter panel.
   *
   * ```js
   * function filterPanel(columns: DataTableColumnInstance<T>[], filters: Filters<T>, resetFilter: (columnId: string) => void,
   *            resetAllFilters: () => void, globalFilter: any, setGlobalFilter: (filterValue: FilterValue) => void
   *            ) => React.ReactElement
   * params:
   *  columns - An array of filter columns, refer `DataTableColumnInstance`
   *  activeFilters - An array of active filters
   *  resetFilter - Function to reset a column's filter
   *  resetAllFilters - Function to reset all the filters
   *  globalFilter - Global filter value
   *  setGlobalFilter - Function to set the global filter value
   * ```
   */
  filterPanel: PropTypes.func,

  /**
   * Function that returns a template for Dragging item.
   *
   * ```js
   * function dragTemplate(column: DataTableColumnInstance<T>) => React.ReactElement
   *  column - An instance of the column object that is dragged
   * ```
   */
  dragTemplate: PropTypes.func,
}

export function DataTable<T extends Record<string, unknown>>(
  props: React.PropsWithChildren<DataTableProps<T>> & {
    ref?: React.Ref<HTMLDivElement>
  }
): React.ReactElement {
  const {
    as,
    id,
    columns,
    pageSize: pageSizeProp,
    pageSizeOptions,
    data,
    resizeColumns,
    checkBoxRowSelection,
    multipleRowSelection,
    disableRowSelectionOnClick,
    disablePagination,
    disableSorting,
    disableFiltering,
    disableDragging,
    striped,
    bordered,
    borderless,
    hover,
    size,
    variant,
    responsive,
    onRowSelectionChange,
    ref,
    className,
    filterPanel,
    dragTemplate,
    ...rest
  } = props
  const resolvedRef = (useRef<HTMLDivElement>(null) ||
    ref) as React.MutableRefObject<HTMLDivElement>

  const bodyRef = useRef(null)

  const enableFiltering = filterPanel && !disableFiltering ? true : false
  const enableRowSelection = !disableRowSelectionOnClick || checkBoxRowSelection
  const enableRowSelectionOnClick = !(
    disableRowSelectionOnClick || checkBoxRowSelection
  )

  // Conditional Table Hooks Array for react-table
  const conditionalHooks: any = [useFlexLayout]
  if (enableFiltering) conditionalHooks.push(useFilters, useGlobalFilter)
  if (!disableSorting) conditionalHooks.push(useSortBy)
  if (!disablePagination) conditionalHooks.push(usePagination)
  if (resizeColumns) conditionalHooks.push(useResizeColumns)
  if (enableRowSelection) conditionalHooks.push(useRowSelect)
  if (!disableDragging) conditionalHooks.push(useColumnOrder)
  if (
    checkBoxRowSelection &&
    !columns.find(col => col.accessor === "selector")
  ) {
    conditionalHooks.push(hooks =>
      checkBoxSelectionHook(hooks, id, multipleRowSelection, size)
    )
  }

  const tableOptions = {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    initialState: {
      pageIndex: 0,
      pageSize: pageSizeProp || 10,
    } as TableState,
    ...(!multipleRowSelection && stateReducer),
  }

  const {
    headerGroups,
    rows,
    page,
    allColumns,
    selectedFlatRows,
    filterColumns,
    visibleColumns,
    state: { pageIndex, pageSize, filters, globalFilter },
    prepareRow,
    getTableProps,
    getTableBodyProps,
    gotoPage,
    setPageSize,
    getAllHeadersInAGroup,
    resetFilter,
    resetAllFilters,
    setGlobalFilter,
    toggleHideColumn,
    toggleHideAllColumns,
    setColumnOrder,
  } = useDataTableInstance<T>(columns, data, tableOptions, conditionalHooks)

  // Callback APIs
  useEffect(() => {
    if (onRowSelectionChange)
      onRowSelectionChange(selectedFlatRows.map(d => d.original))
  }, [selectedFlatRows])

  useEffect(() => {
    bodyRef.current = document.body
  }, [])

  return (
    <>
      <DataTableStyled ref={resolvedRef} className={className} {...rest}>
        <div className={classNames("d-flex flex-column overflow-hidden")}>
          {enableFiltering &&
            filterPanel(
              filterColumns,
              filters,
              resetFilter,
              resetAllFilters,
              globalFilter,
              setGlobalFilter
            )}
          <div
            className={classNames(
              "d-flex flex-column overflow-hidden",
              bordered && "border border-tertiary"
            )}
          >
            <div className={classNames("scrollable", "container")}>
              <Table
                striped={striped}
                bordered={bordered}
                borderless={borderless}
                hover={hover}
                size={size}
                variant={variant}
                responsive={responsive}
                {...getTableProps()}
              >
                <thead className="bg-gray-light sticky-top">
                  {headerGroups.map(headerGroup => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="bg-gray-light"
                    >
                      <DataTableContextMenuProvider
                        allColumns={allColumns}
                        toggleHideAllColumns={toggleHideAllColumns}
                        toggleHideColumn={toggleHideColumn}
                        attachTo={bodyRef.current}
                      >
                        <DataTableDragdropProvider
                          visibleColumns={visibleColumns}
                          setColumnOrder={setColumnOrder}
                          dragItemTemplate={dragTemplate}
                          attachTo={bodyRef.current}
                        >
                          {getAllHeadersInAGroup(
                            headerGroup.headers,
                            headerGroup.id
                          ).map(column => (
                            <DataTableHeaderCell
                              key={column.id}
                              header={column}
                              onToggleHideColumn={toggleHideColumn}
                              className={classNames(
                                checkBoxRowSelection &&
                                  column.id === "selector" &&
                                  "icon-only",
                                "bg-gray-light"
                              )}
                            >
                              {column.render("Header")}
                            </DataTableHeaderCell>
                          ))}
                        </DataTableDragdropProvider>
                      </DataTableContextMenuProvider>
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {(disablePagination ? rows : page).map((row, i) => {
                    prepareRow(row)
                    return (
                      <tr
                        {...row.getRowProps()}
                        onClick={() => {
                          enableRowSelectionOnClick &&
                            row.toggleRowSelected(!row.isSelected)
                        }}
                        className={row.isSelected && "selected"}
                      >
                        {row.cells.map((cell, index) => {
                          return (
                            <td
                              {...cell.getCellProps(getCellStyles)}
                              className={
                                checkBoxRowSelection &&
                                index === 0 &&
                                "icon-only"
                              }
                            >
                              {cell.render("Cell")}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>

            {!disablePagination && (
              <TablePagination
                count={data.length}
                pageIndex={pageIndex}
                pageSize={pageSize}
                onPageChange={gotoPage}
                pageSizeOptions={
                  pageSizeOptions || DATATABLE_DEFAULT_PAGE_SIZES
                }
                onPageSizeChange={setPageSize}
                size={size}
                className="border-top border-tertiary"
              ></TablePagination>
            )}
          </div>
        </div>
      </DataTableStyled>

      {/* {showContextMenu && (

      )} */}
    </>
  )
}

DataTable.propTypes = propTypes

export default DataTable
