/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TableHeaderGroupsContext, TableHeadersContext } from './TableContext';

export interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
  headerGroupIndex?: number;
}

const propTypes = {
  /**
   * CSS class name
   */
  className: PropTypes.string,

  /**
   * Position index for the header group row
   */
  headerGroupIndex: PropTypes.number,
};

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, headerGroupIndex, ...props }, ref) => {
    const headerGroupsContext = useContext(TableHeaderGroupsContext);
    const headerGroup =
      headerGroupsContext && headerGroupsContext[headerGroupIndex || 0];

    if (headerGroup) {
      return (
        <tr
          className={className}
          {...headerGroup.getHeaderGroupProps()}
          {...props}
          ref={ref}
        >
          <TableHeadersContext.Provider value={headerGroup.headers}>
            {children}
          </TableHeadersContext.Provider>
        </tr>
      );
    }
    return (
      <tr className={className} {...props} ref={ref}>
        {children}
      </tr>
    );
  },
);

TableRow.displayName = 'TableRow';
TableRow.propTypes = propTypes;

export default TableRow;
