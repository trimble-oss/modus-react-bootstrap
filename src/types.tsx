/**
 * Types added here becomes available for import
 */

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | string;
export type ButtonVariant =
  | Variant
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light';
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'white'
  | 'muted';

export type EventKey = string | number;

export type {
  DataTableColumn,
  DataTableColumnInstance,
  DataTableFilterPanelProps,
  DataTableFilterProps,
} from './DataTable.types';

export type {
  CellProps as DataTableCellProps,
  DefaultSortTypes as DataTableDefaultSortTypes,
  Filters as DataTableFilters,
  FilterValue as DataTableFilterValue,
  HeaderProps as DataTableHeaderProps,
  IdType as DataTableIdType,
  Renderer as DataTableRenderer,
  SortByFn as DataTableSortByFn,
} from 'react-table';
