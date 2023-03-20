/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  DataTableColumn,
  DataTableColumnInstance,
  DataTableFilterPanelProps,
} from './DataTable.types';

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
  stickyFirstColumn?: boolean;
  filterPanel?: (props: DataTableFilterPanelProps<T>) => React.ReactElement;
  dragTemplate?: (column: DataTableColumnInstance<T>) => React.ReactElement;
  onRowSelectionChange?: (rows: any[]) => void;
}

export const DataTablePropTypes = {
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
   * Pins the first column.
   */
  stickyFirstColumn: PropTypes.bool,

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
   * function filterPanel(props: DataTableFilterPanelProps) => React.ReactElement
   * params:
   * - props:
   *    filterColumns - An array of filter columns (), `DataTableColumnInstance[]`
   *    activeFilters - An array of active filters
   *    resetFilter - Function to reset a column's filter
   *    resetAllFilters - Function to reset all the filters
   *    globalFilter - Global filter value
   *    setGlobalFilter - Function to set the global filter value
   * ```
   */
  filterPanel: PropTypes.func,

  /**
   * Function that returns a template for Dragging item.
   *
   * ```js
   * function dragTemplate(column: DataTableColumnInstance) => React.ReactElement
   *  column - An instance of the column object that is dragged
   * ```
   */
  dragTemplate: PropTypes.func,
};
