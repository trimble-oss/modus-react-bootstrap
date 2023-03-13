import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export interface CloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Close',
};

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ label, onClick, className, ...props }: CloseButtonProps, ref) => (
    <button
      ref={ref}
      type="button"
      className={classNames('close', className)}
      onClick={onClick}
      {...props}
    >
      <i className="modus-icons modus-icon" style={{ fontSize: '1rem' }}>
        close
      </i>
      <span className="sr-only">{label}</span>
    </button>
  ),
);

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
