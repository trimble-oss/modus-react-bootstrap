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
      width: 25,
      minWidth: 25,
      disableResizing: true,
      disableGroupBy: true,
      Cell: ({ row }: CellProps<T>) => {
        return (
          <IndeterminateCheckbox
            size={size}
            {...row.getToggleRowSelectedProps()}
            id={`${tableId}_${DATATABLE_CHECKBOX_SELECTOR_ID}_row"${row.id}`}
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
