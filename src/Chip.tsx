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
import { useUncontrolled } from 'uncontrollable';
import useEventCallback from '@restart/hooks/useEventCallback';
import { Variant } from './types';

export interface ChipProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'type'> {
  variant?: Variant;
  type?: 'input' | 'filter' | string;
  label?: string;
  icon?: React.ReactElement;
  avatar?: React.ReactElement;
  show?: boolean;
  dismissible?: boolean;
  size?: 'sm' | 'lg' | string;
  onClose?: (a: any) => void;
  closeIcon?: React.ReactElement;
}

// const chipDiv = divWithClassName('chip');
// chipDiv.displayName = 'chipDiv';

// const ChipThumbnail = divWithClassName('chip-thumbnail');
// ChipThumbnail.displayName = 'chipThumbnailDiv';

// const ChipText = divWithClassName('chip-text');
// ChipText.displayName = 'chipTextDiv';

// const ChipDismiss = divWithClassName('chip-delete-right');

// type Chip = React.ForwardRefExoticComponent<ChipProps>;
// & {
//   Thumbnail: typeof ChipThumbnail;
//   Text: typeof ChipText;
//   Dismiss: typeof ChipDismiss;
// };

const propTypes = {
  /**
   * Chip visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
   */
  variant: PropTypes.string,

  /**
   * Type that says what type of Chip
   *
   * * @type {'input' | 'filter' }
   */
  type: PropTypes.string,

  /**
   * Label text inside Chip
   *
   */
  label: PropTypes.string,

  /**
   * Chip Icon Element
   *
   */
  icon: PropTypes.element,

  /**
   * Chip Avatar Element
   *
   */
  avatar: PropTypes.element,

  /**
   * Controls the visual state of the Chip.
   *
   * @controllable onClose
   */
  show: PropTypes.bool,

  /**
   * states whether to display close button.
   *
   * @controllable onClose
   */
  dismissible: PropTypes.bool,

  /**
   * Controls the size Chip and its children.
   *
   * @controllable onClose
   */
  size: PropTypes.string,

  /**
   * Callback fired when alert is closed.
   *
   * @controllable show
   */
  onClose: PropTypes.func,

  /**
   * Custom icon for closing the Chip
   *
   */
  closeIcon: PropTypes.element,
};

const defaultProps = {
  show: true,
};
const prefix = 'chip';
const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (uncontrolledProps: ChipProps, ref) => {
    const {
      show,
      className,
      children,
      variant,
      label,
      icon,
      avatar,
      type,
      size,
      dismissible,
      closeIcon,
      onClose,
      ...props
    } = useUncontrolled(uncontrolledProps, {
      // show: 'onClose',
    });

    const handleClose = useEventCallback((e) => {
      if (onClose) {
        onClose(e);
      }
    });
    const chip = (
      <div
        {...props}
        ref={ref}
        className={classNames(
          prefix,
          size && `${prefix}-${size}`,
          variant && `${prefix}-${variant}`,
          type && `${prefix}-${type}`,
          className,
        )}
      >
        {avatar && <div className="chip-thumbnail">{avatar}</div>}
        {icon && <div className="chip-icon-left">{icon}</div>}
        {label && <div className="chip-text">{label}</div>}
        {children}
        {(onClose || dismissible) && (
          // eslint-disable-next-line prettier/prettier
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="chip-delete-right"
            aria-label="chip"
            onClick={handleClose}
          >
            {closeIcon || (
              <i
                className={classNames(size && 'modus-icons', 'material-icons')}
              >
                cancel
              </i>
            )}
          </div>
        )}
      </div>
    );

    return show ? chip : null;
  },
);
// as unknown as Chip;

Chip.displayName = 'Chip';
Chip.defaultProps = defaultProps as any;
Chip.propTypes = propTypes;
// Chip.Thumbnail = ChipThumbnail;
// Chip.Text = ChipText;
// Chip.Dismiss = ChipDismiss;

export default Chip;
