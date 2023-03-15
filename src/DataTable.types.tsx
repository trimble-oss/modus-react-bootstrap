/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import {
  CellProps,
  DefaultSortTypes,
  FilterProps,
  Filters,
  FilterValue,
  HeaderProps,
  IdType,
  Renderer,
  SortByFn,
  UseFiltersColumnProps,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
} from 'react-table';
import { UseFlexLayoutColumnPropsCustom } from './react-table-config';

type ColumnBasicOptions<T extends Record<string, unknown>> = {
  Header: Renderer<HeaderProps<T>> | string;
  width?: number | string;
  minWidth?: number;
  maxWidth?: number;
  accessor: IdType<T>;
  Cell?: Renderer<CellProps<T, any>>;
};

export type DataTableFilterPanelProps<T extends Record<string, unknown>> = {
  filterColumns: DataTableColumnInstance<T>[];
  activeFilters: Filters<T>;
  globalFilter: any;
  resetFilter: (columnId: string) => void;
  resetAllFilters: () => void;
  setGlobalFilter: (filterValue: FilterValue) => void;
};

export type DataTableFilterProps<T extends Record<string, unknown>> =
  FilterProps<T> & {
    column: DataTableColumnInstance<T>;
  };

type ColumnFilterOptions<T extends Record<string, unknown>> = Partial<{
  Filter: Renderer<DataTableFilterProps<T>>;
  disableFilters: boolean;
}>;

type ColumnResizeOptions = Partial<{
  disableResizing: boolean | undefined;
}>;

type ColumnSortOptions<T extends Record<string, unknown>> = Partial<{
  disableSortBy: boolean;
  sortDescFirst: boolean;
  sortType: SortByFn<T> | DefaultSortTypes | string;
  sortBy: boolean;
}>;

type ColumnDragDropOptions = Partial<{
  allowDrop: boolean;
  allowDrag: boolean;
  allowDropForColumns: string[];
}>;

/**
 * Does not support all the column options from react-table yet
 */
export type DataTableColumn<T extends Record<string, unknown>> =
  ColumnBasicOptions<T> &
    ColumnFilterOptions<T> &
    ColumnResizeOptions &
    ColumnDragDropOptions &
    ColumnSortOptions<T>;

export type DataTableColumnInstance<T extends Record<string, unknown>> =
  UseFiltersColumnProps<T> &
    UseResizeColumnsColumnProps<T> &
    UseFlexLayoutColumnPropsCustom<T> &
    UseSortByColumnProps<T>;
