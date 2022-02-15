/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import styled, { css } from 'styled-components';

export interface DataTableStyleWrapperProps
  extends React.HTMLProps<HTMLDivElement> {
  resizecolumns?: 'true' | 'false';
}
export type TablePaginationStyleWrapperProps = React.HTMLProps<HTMLDivElement>;

const DataTableStyleWrapper = React.forwardRef<
  HTMLDivElement,
  DataTableStyleWrapperProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

const TablePaginationStyleWrapper = React.forwardRef<
  HTMLDivElement,
  TablePaginationStyleWrapperProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

export const StyledDataTable = styled(DataTableStyleWrapper)`
  .table {
    :first-child {
      margin: 0;
      width: 100%;
      height: 100%;

      th .modus-icons.material-icons.sorted,
      th .modus-icons.material-icons.unsorted {
        vertical-align: text-bottom;
        font-size: 1rem;
      }

      thead.sticky-top tr {
        box-shadow: 0 1px 0 0 #b7b9c3, 0 -1px 0 0 #b7b9c3;
        border-bottom-width: 0;
        border-top-width: 0;
      }

      th .modus-icons.material-icons.unsorted {
        opacity: 0.5;
      }

      th .modus-icons.material-icons.unsorted:hover {
        opacity: 1;
      }

      th .table-col-resizable {
        bottom: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 5px;
      }

      th .table-col-resizable:hover {
        background-color: #9bc2f7;
        cursor: ew-resize;
      }

      tr.selected {
        background-color: #dcedf9;
      }
    }
  }

  .container {
    :first-child {
      padding: 0;
      width: 100%;
    }
  }
  .scrollable.container {
    :first-child {
      overflow-y: auto;
    }
  }

  ${(props) =>
    props.resizecolumns === 'true' &&
    css`
      table {
        :first-child {
          th,
          td {
            align-items: center;
            display: flex;
          }
        }
      }

      table.table-bordered {
        :first-child {
          th,
          td {
            border: 0;
            border-bottom: 1px solid #b7b9c3;
            border-right: 1px solid #b7b9c3;
          }
        }
      }
    `}
`;

export const StyledTablePagination = styled(TablePaginationStyleWrapper)`
  div.container {
    :first-child {
      margin-bottom: 1rem;
      padding: 0.5rem;

      li.page-item.p-0 > .page-link {
        padding: 0;
      }

      li.page-item.p-0 .nav-link {
        padding: calc((2rem - 0.875rem) / 2) 0.75rem;
      }

      li.page-item.p-0 .nav-item .dropdown-item {
        font-size: 0.875rem;
      }
    }
  }
`;
