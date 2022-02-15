/*!
  React-Bootstrap v1.6.4 (https://react-bootstrap-v4.netlify.app/)
  Copyright (c) 2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff
  Licensed under MIT (https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE)

  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.4
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useBootstrapPrefix } from './ThemeProvider';

import {
  BsPrefixAndClassNameOnlyProps,
  BsPrefixRefForwardingComponent,
} from './helpers';
import { TableContext } from './TableContext';

export interface TableProps extends BsPrefixAndClassNameOnlyProps {
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  size?: string;
  variant?: string;
  responsive?: boolean | string;
}

type Table = BsPrefixRefForwardingComponent<'table', TableProps>;

const propTypes = {
  /**
   * @default 'table'
   */
  bsPrefix: PropTypes.string,

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
};

const Table: Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      bsPrefix,
      className,
      striped,
      bordered,
      borderless,
      hover,
      size,
      variant,
      responsive,
      ...props
    }: TableProps,
    ref,
  ) => {
    const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'table');
    const classes = classNames(
      className,
      decoratedBsPrefix,
      variant && `${decoratedBsPrefix}-${variant}`,
      size && `${decoratedBsPrefix}-${size}`,
      striped && `${decoratedBsPrefix}-striped`,
      bordered && `${decoratedBsPrefix}-bordered`,
      borderless && `${decoratedBsPrefix}-borderless`,
      hover && `${decoratedBsPrefix}-hover`,
    );

    const tableInstance = useContext(TableContext);
    const tableProps = tableInstance && tableInstance.getTableProps();

    const table = (
      <table {...tableProps} {...props} className={classes} ref={ref} />
    );
    if (responsive) {
      let responsiveClass = `${decoratedBsPrefix}-responsive`;
      if (typeof responsive === 'string') {
        responsiveClass = `${responsiveClass}-${responsive}`;
      }

      return <div className={responsiveClass}>{table}</div>;
    }

    return table;
  },
);

Table.propTypes = propTypes;

export default Table;
