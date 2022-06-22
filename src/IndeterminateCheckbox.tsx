/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FormCheck, { FormCheckProps } from './FormCheck';

export interface IndeterminateCheckboxProps
  extends Omit<FormCheckProps, 'size'> {
  id: string;
  indeterminate?: boolean;
  size?: string;
}

const propTypes = {
  /** A HTML id attribute, necessary for proper form accessibility. */
  id: PropTypes.string.isRequired,

  /** Indeterminate state flag. */
  indeterminate: PropTypes.bool,

  /**
   * Set's the size of checkbox.
   *
   * @type {'sm'|'lg'}
   */
  size: PropTypes.string,
};

const IndeterminateCheckbox = React.forwardRef<
  FormCheck,
  IndeterminateCheckboxProps
>(({ id, size, indeterminate, ...props }, ref) => {
  const defaultRef = React.useRef<HTMLInputElement>(null);
  const resolvedRef = (ref ||
    defaultRef) as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate || false;
  }, [resolvedRef, indeterminate]);

  return (
    <FormCheck
      className={classNames(size && `custom-control-${size}`)}
      custom
      id={id}
      ref={resolvedRef}
      {...props}
    />
  );
});

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';
IndeterminateCheckbox.propTypes = propTypes;

export default IndeterminateCheckbox;
