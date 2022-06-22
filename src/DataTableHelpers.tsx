/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import * as React from 'react';
import { Cell, CellProps, HeaderProps, Hooks, Meta } from 'react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';

// constants
export const DATATABLE_CHECKBOX_SELECTOR_ID = 'selector';
export const DATATABLE_DEFAULT_PAGE_SIZES = [10, 20, 30, 40, 50];

// components
export const checkBoxSelectionHook = <T extends Record<string, unknown>>(
  hooks: Hooks<T>,
  tableId: string,
  multipleRowSelection,
  size?: string,
) => {
  hooks.visibleColumns.push((columns) => [
    {
      id: DATATABLE_CHECKBOX_SELECTOR_ID,
      width: 50,
      disableResizing: true,
      disableGroupBy: true,
      Cell: ({ row }: CellProps<T>) => {
        return (
          <IndeterminateCheckbox
            size={size}
            {...row.getToggleRowSelectedProps()}
            id={`${tableId}_${DATATABLE_CHECKBOX_SELECTOR_ID}_row"${row.id}`}
            aria-label="Select the row"
          />
        );
      },
      ...(multipleRowSelection && {
        Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<T>) => {
          return (
            <IndeterminateCheckbox
              size={size}
              {...getToggleAllRowsSelectedProps()}
              id={`${tableId}_${DATATABLE_CHECKBOX_SELECTOR_ID}_header`}
              aria-label="Select all rows"
            />
          );
        },
      }),
    },
    ...columns,
  ]);
};

// functions
export const stateReducer = {
  stateReducer: (newState, action) => {
    if (action.type === 'toggleRowSelected') {
      newState.selectedRowIds = action.value && {
        [action.id]: true,
      };
    }

    return newState;
  },
};
export const getCellStyles = <T extends Record<string, unknown>>(
  props: any,
  { cell }: Meta<T, { cell: Cell<T> }>,
) => [
  props,
  {
    style: {
      flex: cell.column.width ? `${cell.column.width} 0 auto` : undefined,
    },
  },
];
