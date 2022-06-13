import React, { useCallback, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { Form } from "@trimbleinc/modus-react-bootstrap"
import { ContextMenuState } from "./types"
import renderUsingPortal from "./renderUsingPortal"
import ContextMenu from "./ContextMenu"
import { DATATABLE_CHECKBOX_SELECTOR_ID } from "./DataTableHelpers"

export const DataTableHeaderContextMenu = React.createContext<{
  onHeaderContextMenu: (event: any, columnId: any) => void
}>(null)

export default function DataTableContextMenuProvider({
  children,
  allColumns,
  toggleHideColumn,
  toggleHideAllColumns,
  attachTo,
}) {
  const [contextMenu, setContextMenu] = useState<ContextMenuState>(null)
  const [showContextMenu, setShowContextMenu] = useState(false)

  const handleHeaderContextMenu = useCallback(
    (event, columnId) => {
      const columns = allColumns.filter(
        col => col.id !== DATATABLE_CHECKBOX_SELECTOR_ID
      )
      const contextMenu: ContextMenuState = {
        positionX: event.clientX,
        positionY: event.clientY,
        items: [
          {
            title: "Hide",
            onClick: () => {
              toggleHideColumn(columnId, true)
              setShowContextMenu(false)
            },
          },
          {
            title: "Show Columns",
            children: columns.map(column => {
              return {
                title: (
                  <Form.Check
                    label={column.render("Header")}
                    custom
                    id={column.id}
                    data-indeterminate="false"
                    {...(column.isVisible && { defaultChecked: true })}
                    onChange={() =>
                      toggleHideColumn(column.id, column.isVisible)
                    }
                  ></Form.Check>
                ),
              }
            }),
          },
          {
            title: "Show All Columns",
            onClick: () => {
              toggleHideAllColumns(false)
              setShowContextMenu(false)
            },
          },
        ],
      }
      setContextMenu(contextMenu)
      setShowContextMenu(true)
    },
    [allColumns, toggleHideColumn, toggleHideAllColumns]
  )

  const handleContextMenuClose = useCallback(
    e => {
      setShowContextMenu(false)
    },
    [setShowContextMenu]
  )

  const value = useMemo(
    () => ({ onHeaderContextMenu: handleHeaderContextMenu }),
    [handleHeaderContextMenu]
  )

  return (
    <DataTableHeaderContextMenu.Provider value={value}>
      {children}
      {showContextMenu &&
        renderUsingPortal(
          <ContextMenu
            menu={contextMenu.items}
            anchorPointX={contextMenu.positionX}
            anchorPointY={contextMenu.positionY}
            onClose={handleContextMenuClose}
          />,
          attachTo
        )}
    </DataTableHeaderContextMenu.Provider>
  )
}

DataTableContextMenuProvider.propTypes = {
  children: PropTypes.node,
  attachTo: PropTypes.any.isRequired,
  allColumns: PropTypes.any.isRequired,
  toggleHideColumn: PropTypes.func.isRequired,
  toggleHideAllColumns: PropTypes.func.isRequired,
}
