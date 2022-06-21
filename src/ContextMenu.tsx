import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { ContextMenuItem } from './types';

interface ContextMenuProps extends Omit<React.HTMLProps<HTMLDivElement>, 'as'> {
  menu: ContextMenuItem[];
  anchorPointX: string | number;
  anchorPointY: string | number;
  onClose: (...args: any[]) => void;
}

const ContextMenuStyled = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  min-width: 150px;
  cursor: pointer;

  .list-group-item + .dropdown-menu {
    padding: 0;
  }

  span,
  div,
  label,
  li {
    font-size: 0.875rem;
  }
`;

function ContextMenu(
  props: React.PropsWithChildren<ContextMenuProps> & {
    ref?: React.Ref<HTMLDivElement>;
  },
): React.ReactElement {
  const { menu, anchorPointX, anchorPointY, onClose, ...rest } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose(e);
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!(typeof window === 'undefined' || !window.document)) {
      window.document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      if (!(typeof window === 'undefined' || !window.document)) {
        window.document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [handleClickOutside]);

  return (
    <ContextMenuStyled
      className="list-group"
      ref={ref}
      style={{
        transform: `translate(calc(${anchorPointX}px), calc(${anchorPointY}px))`,
      }}
      {...rest}
    >
      {menu.map((item, index) => {
        return item.children ? (
          <Dropdown id={`list_item_${index}`} drop="right">
            <Dropdown.Toggle as="li" className="list-group-item">
              <span style={{ marginRight: '10%' }}>{item.title}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-md">
              <ul className="list-group dropdown-item p-0 m-0">
                {item.children.map((childItem, childIndex) => (
                  <li
                    className="list-group-item"
                    key={`child_list_item_${childIndex}`}
                    onClick={childItem.onClick}
                    style={{ wordWrap: 'break-word' }}
                  >
                    {childItem.title}
                  </li>
                ))}
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <li
            className="list-group-item"
            key={`list_item_${index}`}
            onClick={item.onClick}
          >
            {item.title}
          </li>
        );
      })}
    </ContextMenuStyled>
  );
}

ContextMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  anchorPointX: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  anchorPointY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContextMenu;
