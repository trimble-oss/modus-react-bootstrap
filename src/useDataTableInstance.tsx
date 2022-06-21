/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import { useCallback, useMemo } from 'react';
import { HeaderGroup, IdType, useAsyncDebounce, useTable } from 'react-table';
import { DataTableColumnInstance } from './types';

function useDataTableInstance<T extends Record<string, unknown>>(
  columns,
  data,
  options,
  hooks,
) {
  // Handle custom props such as - sortBy
  const normalizedColumns = useMemo(
    () =>
      columns.map((col) => {
        const { sortBy, ...columnProps } = col;
        columnProps.disableSortBy = !sortBy;
        return columnProps;
      }),
    [columns],
  );

  // Construct Table instance
  const tableInstance = useTable<T>(
    {
      columns: normalizedColumns,
      data,
      ...options,
    },
    ...hooks,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    allColumns,
    setFilter,
    setAllFilters,
    setGlobalFilter,
    toggleHideColumn,
    toggleHideAllColumns,
    visibleColumns,
    setColumnOrder,
    page,
    pageOptions,
    gotoPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, filters, globalFilter },
  } = tableInstance;

  const filterColumns = useMemo(
    () =>
      allColumns
        .filter((it) => it.canFilter && it.Filter)
        .map((props) => props as DataTableColumnInstance<T>),
    [allColumns],
  );

  const resetFilter = useCallback(
    (columnId: IdType<T>) => setFilter(columnId, undefined),
    [setFilter],
  );

  const resetAllFilters = useCallback(() => setAllFilters([]), [setAllFilters]);

  // Use useAsyncDebounce for Global filter https://react-table.tanstack.com/docs/faq#how-can-i-debounce-rapid-table-state-changes
  const setGlobalFilterCustom = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 50);

  // Helpers
  // To add invisible columns
  const getAllHeadersInAGroup = useCallback(
    (curr: HeaderGroup<T>[], headerGroupid: any) => {
      return allColumns
        .filter(
          (col) =>
            col.id === 'selector' ||
            !headerGroupid ||
            (col.parent ? col.parent.id === headerGroupid : false),
        )
        .map((col) => {
          const newCol = curr.find((c) => c.id === col.id);
          return newCol || col;
        });
    },
    [allColumns],
  );

  return {
    // tableinstance
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    allColumns,
    filterColumns,
    resetFilter,
    resetAllFilters,
    setColumnOrder,
    visibleColumns,
    setGlobalFilter: setGlobalFilterCustom,
    toggleHideColumn,
    toggleHideAllColumns,
    page,
    pageOptions,
    gotoPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, filters, globalFilter },
    getAllHeadersInAGroup,
  };
}

export default useDataTableInstance;
