import { MouseEventHandler } from "react"
import {
  TableInstance,
  UseColumnOrderInstanceProps,
  UseColumnOrderState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseResizeColumnsColumnOptions,
  UseResizeColumnsColumnProps,
  UseResizeColumnsOptions,
  UseResizeColumnsState,
  UseRowSelectHooks,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
} from "react-table"

declare module "react-table" {
  export interface UseFlexLayoutInstanceProps<D extends object = {}> {
    totalColumnsMinWidth: number
  }

  export interface UseFlexLayoutColumnProps<D extends object = {}>  extends UseFlexLayoutColumnPropsCustom<D>{}

  export interface TableOptions<D extends object = {}>
    extends UsePaginationOptions<D>,
      UseResizeColumnsOptions<D>,
      UseRowSelectOptions<D>,
      UseFiltersOptions<D>,
      UseGlobalFiltersOptions<D>,
      UseSortByOptions<D> {}

  export interface Hooks<D extends object = {}>
    extends UseRowSelectHooks<D>,
      UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}>
    extends UseColumnOrderInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseFlexLayoutInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseColumnOrderState<D>,
      UsePaginationState<D>,
      UseResizeColumnsState<D>,
      UseRowSelectState<D>,
      UseFiltersState<D>,
      UseGlobalFiltersState<D>,
      UseSortByState<D> {
    rowCount: number
  }

  export interface ColumnInterface<D extends object = {}>
    extends UseFiltersColumnOptions<D>,
      UseResizeColumnsColumnOptions<D>,
      UseSortByColumnOptions<D> {
    align?: string
    allowDrag?: boolean
    allowDrop?: boolean
    allowDropForColumns?: string[]
  }

  export interface ColumnInstance<D extends object = {}>
    extends UseFiltersColumnProps<D>,
      UseResizeColumnsColumnProps<D>,
      UseFlexLayoutColumnProps<D>,
      UseSortByColumnProps<D> {}

  export interface Cell<D extends object = {}> extends UseGroupByCellProps<D> {}

  export interface Row<D extends object = {}> extends UseRowSelectRowProps<D> {}

  export interface TableCommonProps {
    title?: string
    "aria-label"?: string
  }

  export interface TableSortByToggleProps {
    title?: string
  }

  export interface TableGroupByToggleProps {
    title?: string
  }
}

// export type TableMouseEventHandler = (instance: TableInstance<T>) => MouseEventHandler

export interface UseFlexLayoutColumnPropsCustom<D extends object = {}> {
  totalMinWidth: number
}
