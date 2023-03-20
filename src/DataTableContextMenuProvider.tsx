/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import { ContextMenuState } from './ContextMenu.types';
import renderUsingPortal from './renderUsingPortal';
import ContextMenu from './ContextMenu';
import { DATATABLE_CHECKBOX_SELECTOR_ID } from './DataTableHelpers';

export const DataTableHeaderContextMenu = React.createContext<{
  onHeaderContextMenu: (event: any, columnId: any) => void;
} | null>(null);

export default function DataTableContextMenuProvider({
  children,
  size,
  allColumns,
  toggleHideColumn,
  toggleHideAllColumns,
}) {
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

  const handleHeaderContextMenu = useCallback(
    (event, columnId) => {
      const columns = allColumns.filter(
        (col) => col.id !== DATATABLE_CHECKBOX_SELECTOR_ID,
      );
      const menu: ContextMenuState = {
        positionX: event.clientX,
        positionY: event.clientY,
        items: [
          {
            title: 'Hide',
            onClick: () => {
              toggleHideColumn(columnId, true);
              setContextMenu(null);
            },
          },
          {
            title: 'Show Columns',
            children: columns.map((column) => ({
              title: (
                <Form.Check
                  label={column.render('Header')}
                  custom
                  id={column.id}
                  data-indeterminate="false"
                  {...(column.isVisible && { defaultChecked: true })}
                  onChange={() => toggleHideColumn(column.id, column.isVisible)}
                />
              ),
            })),
          },
          {
            title: 'Show All Columns',
            onClick: () => {
              toggleHideAllColumns(false);
              setContextMenu(null);
            },
          },
        ],
      };
      setContextMenu(menu);
    },
    [allColumns, toggleHideColumn, toggleHideAllColumns],
  );

  const handleContextMenuClose = useCallback(() => {
    setContextMenu(null);
  }, [setContextMenu]);

  const value = useMemo(
    () => ({ onHeaderContextMenu: handleHeaderContextMenu }),
    [handleHeaderContextMenu],
  );

  return (
    <DataTableHeaderContextMenu.Provider value={value}>
      {children}
      {renderUsingPortal(
        contextMenu ? (
          <ContextMenu
            size={size}
            menu={contextMenu.items}
            anchorPointX={contextMenu.positionX}
            anchorPointY={contextMenu.positionY}
            onClose={handleContextMenuClose}
          />
        ) : null,
        document.body,
      )}
    </DataTableHeaderContextMenu.Provider>
  );
}

DataTableContextMenuProvider.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  allColumns: PropTypes.any.isRequired,
  toggleHideColumn: PropTypes.func.isRequired,
  toggleHideAllColumns: PropTypes.func.isRequired,
};
