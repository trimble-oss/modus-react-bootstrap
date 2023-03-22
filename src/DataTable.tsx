/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useCallback, useEffect, useRef } from 'react';
import {
  useSortBy,
  usePagination,
  useResizeColumns,
  useFlexLayout,
  TableState,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useColumnOrder,
  Row,
} from 'react-table';
import classNames from 'classnames';
import {
  DATATABLE_DEFAULT_PAGE_SIZES,
  checkBoxSelectionHook,
  getCellStyles,
  stateReducer,
} from './DataTableHelpers';
import Table from './Table';
import TablePagination from './TablePagination';
import DataTableHeaderCell from './DataTableHeaderCell';
import DataTableDragdropProvider from './DataTableDragdropProvider';
import DataTableContextMenuProvider from './DataTableContextMenuProvider';
import useDataTableInstance from './useDataTableInstance';
import { DataTableProps, DataTablePropTypes } from './DataTable.props';

function RenderFilterPanel<T extends Record<string, unknown>>(
  props: DataTableProps<T>,
  tableInstance: any,
) {
  const { filterPanel, disableFiltering } = props;
  const {
    filterColumns,
    resetFilter,
    resetAllFilters,
    setGlobalFilter,
    state: { filters: activeFilters, globalFilter },
  } = tableInstance;

  return filterPanel && !disableFiltering
    ? filterPanel({
        filterColumns,
        activeFilters,
        resetFilter,
        resetAllFilters,
        globalFilter,
        setGlobalFilter,
      })
    : null;
}

function RenderPagination<T extends Record<string, unknown>>(
  props: DataTableProps<T>,
  tableInstance: any,
) {
  const { data, disablePagination, pageSizeOptions, size } = props;
  const {
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return !disablePagination ? (
    <TablePagination
      count={data.length}
      pageIndex={pageIndex}
      pageSize={pageSize}
      onPageChange={gotoPage}
      pageSizeOptions={pageSizeOptions || DATATABLE_DEFAULT_PAGE_SIZES}
      onPageSizeChange={setPageSize}
      size={size}
    />
  ) : null;
}

function RenderTableHeader<T extends Record<string, unknown>>(
  props: DataTableProps<T>,
  tableInstance: any,
) {
  const { size, dragTemplate } = props;

  const {
    headerGroups,
    allColumns,
    visibleColumns,
    getAllHeadersInAGroup,
    toggleHideColumn,
    toggleHideAllColumns,
    setColumnOrder,
  } = tableInstance;

  return (
    <thead className="bg-gray-light">
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()} role="row">
          <DataTableContextMenuProvider
            size={size}
            allColumns={allColumns}
            toggleHideAllColumns={toggleHideAllColumns}
            toggleHideColumn={toggleHideColumn}
          >
            <DataTableDragdropProvider
              visibleColumns={visibleColumns}
              setColumnOrder={setColumnOrder}
              dragItemTemplate={dragTemplate}
            >
              {getAllHeadersInAGroup(headerGroup.headers, headerGroup.id).map(
                (column, index: number) => (
                  <DataTableHeaderCell
                    key={column.id}
                    header={column}
                    onToggleHideColumn={toggleHideColumn}
                    role="columnheader"
                    aria-sort={
                      (column.isSorted &&
                        (column.isSortedDesc ? 'descending' : 'ascending')) ||
                      'none'
                    }
                    className="bg-gray-light sticky-top"
                    aria-colindex={index + 1}
                  >
                    {column.render('Header')}
                  </DataTableHeaderCell>
                ),
              )}
            </DataTableDragdropProvider>
          </DataTableContextMenuProvider>
        </tr>
      ))}
    </thead>
  );
}

function RenderTableBody<T extends Record<string, unknown>>(
  props: DataTableProps<T>,
  tableInstance: any,
  handleRowClickFn: (row: Row<T>) => void,
) {
  const { checkBoxRowSelection, disablePagination } = props;

  const { rows, page, prepareRow, getTableBodyProps } = tableInstance;

  return (
    <tbody {...getTableBodyProps()}>
      {(disablePagination ? rows : page).map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            onClick={() => handleRowClickFn(row)}
            className={classNames(row.isSelected && 'selected')}
            role="row"
          >
            {row.cells.map((cell, index: number) => (
              <td
                {...cell.getCellProps(getCellStyles)}
                className={classNames(
                  index === 0 &&
                    `${
                      checkBoxRowSelection && 'icon-only checkbox-selector-cell'
                    }`,
                )}
                role="cell"
                aria-rowindex={index + 1}
              >
                {cell.render('Cell')}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

function RenderTable<T extends Record<string, unknown>>(
  props: DataTableProps<T>,
  tableInstance: any,
  handleRowClickFn: (row: Row<T>) => void,
) {
  const {
    data,
    striped,
    stickyFirstColumn,
    bordered,
    borderless,
    hover,
    size,
    variant,
    responsive,
  } = props;

  const { allColumns, isResizing, getTableProps } = tableInstance;

  return (
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
      className={classNames(
        stickyFirstColumn && 'table-sticky-first-column',
        isResizing && 'resizing',
      )}
    >
      {RenderTableHeader(props, tableInstance)}
      {RenderTableBody(props, tableInstance, handleRowClickFn)}
    </Table>
  );
}

function DataTable<T extends Record<string, unknown>>(
  props: React.PropsWithChildren<DataTableProps<T>> & {
    ref?: React.Ref<HTMLDivElement>;
  },
): React.ReactElement {
  /* eslint-disable */
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
    stickyFirstColumn,
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
    ...htmlProps
  } = props;
  /* eslint-enable */

  const resolvedRef = (useRef<HTMLDivElement>(null) ||
    ref) as React.MutableRefObject<HTMLDivElement>;

  const enableRowSelection =
    !disableRowSelectionOnClick || checkBoxRowSelection;
  const disableMouseClickRowSelection =
    disableRowSelectionOnClick || checkBoxRowSelection;

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
      checkBoxSelectionHook(hooks, id, multipleRowSelection),
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

  const tableInstance = useDataTableInstance<T>(
    columns,
    data,
    tableOptions,
    conditionalHooks,
  );
  const { selectedFlatRows } = tableInstance;

  // Callback APIs
  useEffect(() => {
    if (onRowSelectionChange)
      onRowSelectionChange(selectedFlatRows.map((d) => d.original));
  }, [selectedFlatRows, onRowSelectionChange]);

  const handleRowClick = useCallback(
    (row: Row<T>) => {
      if (!disableMouseClickRowSelection) {
        row.toggleRowSelected(!row.isSelected);
      }
    },
    [disableMouseClickRowSelection],
  );

  return (
    <div
      ref={resolvedRef}
      className={classNames(
        'mrb-data-table',
        bordered && 'mrb-data-table-bordered',
        className,
      )}
      {...htmlProps}
    >
      <div className={classNames('d-flex flex-column overflow-hidden')}>
        {RenderFilterPanel(props, tableInstance)}
        <div
          className={classNames(
            'mrb-data-table-container d-flex flex-column overflow-hidden',
          )}
        >
          {
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            <div className={classNames('scrollable')} tabIndex={0}>
              {RenderTable(props, tableInstance, handleRowClick)}
            </div>
          }
          {RenderPagination(props, tableInstance)}
        </div>
      </div>
    </div>
  );
}

DataTable.propTypes = DataTablePropTypes;

export default DataTable;
