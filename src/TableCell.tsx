/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */
import * as React from 'react';
import PropTypes from 'prop-types';

export type TableCellProps = React.HTMLProps<HTMLTableCellElement>;

const propTypes = {
  /**
   * CSS class name
   */
  className: PropTypes.string,
};

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <td className={className} {...props} ref={ref}>
        {children}
      </td>
    );
  },
);

TableCell.displayName = 'TableCell';
TableCell.propTypes = propTypes;

export default TableCell;
