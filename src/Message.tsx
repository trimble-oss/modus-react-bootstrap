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
  icon?: React.ReactElement | string;
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
   * Icon must be either a valid JSX element or a modus icon, ex: 'info_outlined'. Icon: `ReactElement | string`
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
    const iconElement: React.ReactElement | undefined =
      typeof icon === 'string' ? (
        <i className="modus-icons" aria-hidden="true">
          {icon}
        </i>
      ) : (
        icon
      );
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
        {iconElement}
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
