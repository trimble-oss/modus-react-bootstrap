import { ReactNode } from 'react';
import {
  Column,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseResizeColumnsColumnOptions,
  UseResizeColumnsColumnProps,
  UseSortByColumnOptions,
  UseSortByColumnProps,
} from 'react-table';
import { UseFlexLayoutColumnPropsCustom } from './react-table-config';

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

// Excluded some props from react-table
// as they are not supported in <DataTable> component for now.
export type DataTableColumn<T extends Record<string, unknown>> = Omit<
  Column<T>,
  'accessor' | 'columns' | 'Footer'
> &
  Omit<UseFiltersColumnOptions<T>, 'defaultCanFilter' | 'filter'> &
  UseResizeColumnsColumnOptions<T> &
  Omit<
    UseSortByColumnOptions<T>,
    'defaultCanSort' | 'disableSortBy' | 'sortInverted'
  > & {
    accessor: string;
    sortBy?: boolean;
    allowDrop?: boolean;
    allowDrag?: boolean;
    allowDropForColumns?: string[];
  };

// Excluded function props added by react-table
// as they are not supported in <DataTable> component in this context.
export type DataTableColumnInstance<T extends Record<string, unknown>> = Omit<
  UseFiltersColumnProps<T>,
  'setFilter'
> &
  Omit<UseResizeColumnsColumnProps<T>, 'getResizerProps'> &
  UseFlexLayoutColumnPropsCustom<T> &
  Omit<
    UseSortByColumnProps<T>,
    'toggleSortBy' | 'getSortByToggleProps' | 'clearSortBy'
  >;

export type ContextMenuState = {
  positionX: string | number;
  positionY: string | number;
  items: ContextMenuItem[];
};
export type ContextMenuItem = {
  title: React.ReactNode;
  onClick?: (...args: any) => void;
  children?: ContextMenuItem[];
};
export type TreeItem = {
  id: number;
  index: number;
  parentId?: number;
  label?: ReactNode;
  children?: TreeItem[];
  disabled?: boolean;
  element?: any;
};

export type FileUploadDropZoneState = 'default' | 'drop' | 'error' | 'disabled';
