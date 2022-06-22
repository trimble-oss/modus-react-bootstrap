/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
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
  Row,
} from 'react-table';
import classNames from 'classnames';
import { DataTableColumn, DataTableColumnInstance } from './types';
import {
  DATATABLE_DEFAULT_PAGE_SIZES,
  checkBoxSelectionHook,
  getCellStyles,
  stateReducer,
} from './DataTableHelpers';
import Table from './Table';
import TablePagination from './TablePagination';
import DataTableHeaderCell from './DataTableHeaderCell';
import DataTableStyled from './DataTableStyled';
import DataTableDragdropProvider from './DataTableDragdropProvider';
import DataTableContextMenuProvider from './DataTableContextMenuProvider';
import useDataTableInstance from './useDataTableInstance';

export interface DataTableProps<T extends Record<string, unknown>>
  extends Omit<React.HTMLProps<HTMLDivElement>, 'data' | 'size' | 'as'> {
  id: string;
  data: ReadonlyArray<T>;
  columns: ReadonlyArray<DataTableColumn<T>>;
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  size?: string;
  variant?: string;
  responsive?: boolean | string;
  pageSize?: number;
  pageSizeOptions?: number[];
  resizeColumns?: boolean;
  multipleRowSelection?: boolean;
  checkBoxRowSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  disablePagination?: boolean;
  disableSorting?: boolean;
  disableFiltering?: boolean;
  disableDragging?: boolean;
  filterPanel?: (
    columns: DataTableColumnInstance<T>[],
    filters: Filters<T>,
    resetFilter: (columnId: string) => void,
    resetAllFilters: () => void,
    globalFilter: any,
    setGlobalFilter: (filterValue: FilterValue) => void,
  ) => React.ReactElement;
  dragTemplate?: (column: DataTableColumnInstance<T>) => React.ReactElement;
  onRowSelectionChange?: (rows: any[]) => void;
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
};

function DataTable<T extends Record<string, unknown>>(
  props: React.PropsWithChildren<DataTableProps<T>> & {
    ref?: React.Ref<HTMLDivElement>;
  },
): React.ReactElement {
  const {
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
  } = props;
  const resolvedRef = (useRef<HTMLDivElement>(null) ||
    ref) as React.MutableRefObject<HTMLDivElement>;

  const bodyRef = useRef<any>(null);

  const enableRowSelection =
    !disableRowSelectionOnClick || checkBoxRowSelection;
  const enableRowSelectionOnClick = !(
    disableRowSelectionOnClick || checkBoxRowSelection
  );

  // Conditional Table Hooks Array for react-table
  const conditionalHooks: any = [useFlexLayout];
  if (filterPanel && !disableFiltering)
    conditionalHooks.push(useFilters, useGlobalFilter);
  if (!disableSorting) conditionalHooks.push(useSortBy);
  if (!disablePagination) conditionalHooks.push(usePagination);
  if (resizeColumns) conditionalHooks.push(useResizeColumns);
  if (enableRowSelection) conditionalHooks.push(useRowSelect);
  if (!disableDragging) conditionalHooks.push(useColumnOrder);
  if (
    checkBoxRowSelection &&
    !columns.find((col) => col.accessor === 'selector')
  ) {
    conditionalHooks.push((hooks) =>
      checkBoxSelectionHook(hooks, id, multipleRowSelection, size),
    );
  }

  const tableOptions = {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    initialState: {
      pageIndex: 0,
      pageSize: pageSizeProp || 10,
    } as TableState,
    ...(!multipleRowSelection && stateReducer),
  };

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
  } = useDataTableInstance<T>(columns, data, tableOptions, conditionalHooks);

  // Callback APIs
  useEffect(() => {
    if (onRowSelectionChange)
      onRowSelectionChange(selectedFlatRows.map((d) => d.original));
  }, [selectedFlatRows, onRowSelectionChange]);

  useEffect(() => {
    bodyRef.current = document.body;
  }, []);

  const handleRowClick = useCallback(
    (row: Row<T>) => {
      if (enableRowSelectionOnClick) {
        row.toggleRowSelected(!row.isSelected);
      }
    },
    [enableRowSelectionOnClick],
  );

  return (
    <DataTableStyled ref={resolvedRef} className={className} {...rest}>
      <div className={classNames('d-flex flex-column overflow-hidden')}>
        {filterPanel &&
          !disableFiltering &&
          filterPanel(
            filterColumns,
            filters,
            resetFilter,
            resetAllFilters,
            globalFilter,
            setGlobalFilter,
          )}
        <div
          className={classNames(
            'd-flex flex-column overflow-hidden',
            bordered && 'border border-tertiary',
          )}
        >
          {
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            <div className={classNames('scrollable')} tabIndex={0}>
              <Table
                striped={striped}
                bordered={bordered}
                borderless={borderless}
                hover={hover}
                size={size}
                variant={variant}
                responsive={responsive}
                {...getTableProps()}
                role="table"
                aria-colcount={allColumns.length}
                aria-rowcount={data.length}
              >
                <thead className="bg-gray-light sticky-top">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      role="row"
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
                            headerGroup.id,
                          ).map((column, index: number) => (
                            <DataTableHeaderCell
                              key={column.id}
                              header={column}
                              onToggleHideColumn={toggleHideColumn}
                              className={classNames(
                                checkBoxRowSelection &&
                                  column.id === 'selector' &&
                                  'icon-only',
                                'bg-gray-light',
                              )}
                              role="columnheader"
                              aria-sort={
                                (column.isSorted &&
                                  (column.isSortedDesc
                                    ? 'descending'
                                    : 'ascending')) ||
                                'none'
                              }
                              aria-colindex={index + 1}
                            >
                              {column.render('Header')}
                            </DataTableHeaderCell>
                          ))}
                        </DataTableDragdropProvider>
                      </DataTableContextMenuProvider>
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {(disablePagination ? rows : page).map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        onClick={() => handleRowClick(row)}
                        className={classNames(row.isSelected && 'selected')}
                        role="row"
                      >
                        {row.cells.map((cell, index: number) => {
                          return (
                            <td
                              {...cell.getCellProps(getCellStyles)}
                              className={classNames(
                                checkBoxRowSelection &&
                                  index === 0 &&
                                  'icon-only',
                              )}
                              role="cell"
                              aria-rowindex={index + 1}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          }

          {!disablePagination && (
            <TablePagination
              count={data.length}
              pageIndex={pageIndex}
              pageSize={pageSize}
              onPageChange={gotoPage}
              pageSizeOptions={pageSizeOptions || DATATABLE_DEFAULT_PAGE_SIZES}
              onPageSizeChange={setPageSize}
              size={size}
              className="border-top border-tertiary"
            />
          )}
        </div>
      </div>
    </DataTableStyled>
  );
}

DataTable.propTypes = propTypes;

export default DataTable;
