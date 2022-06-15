/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */
import * as React from 'react';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { elementType } from 'prop-types-extra';
import useEventCallback from '@restart/hooks/useEventCallback';
import Alert, { AlertProps } from './Alert';

export type AlertDismissibleProps = Omit<AlertProps, 'dismissible'>;

const propTypes = {
  /**
   * @default 'alert'
   */
  bsPrefix: PropTypes.string,

  /**
   * The Alert visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
   */
  variant: PropTypes.string,

  /**
   * Controls the visual state of the Alert.
   *
   * @controllable onClose
   */
  show: PropTypes.bool,

  /**
   * Callback fired when alert is closed.
   *
   * @controllable show
   */
  onClose: PropTypes.func,

  /**
   * Sets the text for alert close button.
   */
  closeLabel: PropTypes.string,

  /**
   * Animate the alert dismissal. Defaults to using `<Fade>` animation or use
   * `false` to disable. A custom `react-transition-group` Transition can also
   * be provided.
   */
  transition: PropTypes.oneOfType([PropTypes.bool, elementType]),
};

const AlertDismissible = forwardRef<HTMLDivElement, AlertDismissibleProps>(
  ({ onClose: onCloseDismiss, ...props }: AlertDismissibleProps, ref) => {
    const [show, setShow] = useState(true);

    const handleClose = useEventCallback((a, b) => {
      setShow(false);
      if (onCloseDismiss) {
        onCloseDismiss(a, b);
      }
    });

    const alert = (
      <Alert {...props} onClose={handleClose} ref={ref} dismissible>
        {props.children}
      </Alert>
    );

    return show ? alert : null;
  },
);

AlertDismissible.propTypes = propTypes;
AlertDismissible.displayName = 'AlertDismissible';

export default AlertDismissible;
