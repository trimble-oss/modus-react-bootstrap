/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */
import * as React from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { Variant } from './types';

export interface MessageProps extends React.HTMLProps<HTMLDivElement> {
  variant?: Variant;
  message?: string;
  icon?: React.ReactElement;
  show?: boolean;
}

const propTypes = {
  /**
   * The visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
   */
  variant: PropTypes.string,

  /**
   * message text
   *
   */
  label: PropTypes.string,

  /**
   * Icon Element
   *
   */
  icon: PropTypes.element,

  /**
   * Controls the visual state.
   *
   * @controllable onClose
   */
  show: PropTypes.bool,
};

const defaultProps = {
  show: true,
};
const prefix = 'message';
const Message = forwardRef<HTMLDivElement, MessageProps>(
  (
    { variant, message, icon, show, className, ...props }: MessageProps,
    ref,
  ) => {
    const msg = (
      <div
        {...props}
        ref={ref}
        className={classNames(
          prefix,
          variant && `${prefix}-${variant}`,
          className,
        )}
      >
        {icon && <i className="modus-icons">{icon}</i>}
        {message}
        {props.children}
      </div>
    );

    return show ? msg : null;
  },
);

Message.displayName = 'Message';
Message.defaultProps = defaultProps as any;
Message.propTypes = propTypes;

export default Message;
