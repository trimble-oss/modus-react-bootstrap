/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TreeViewContext from './TreeViewContext';
import TreeViewItemContext from './TreeViewItemContext';
import { TreeItem } from './types';
import { TreeViewItemStyled, TreeViewItemGroupStyled } from './TreeViewStyled';
import useDescendants from './useTreeViewDescendants';
import IndeterminateCheckbox from './IndeterminateCheckbox';

export interface TreeViewItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'label'> {
  nodeId: number;
  label: React.ReactNode;
  collapseIcon?: React.ReactElement;
  expandIcon?: React.ReactElement;
  itemIcon?: React.ReactElement;
  dragIcon?: React.ReactElement;
  disabled?: boolean;
}

const propTypes = {
  /** An unique numerical id for Tree Item */
  nodeId: PropTypes.number.isRequired,

  /** Tree Item label */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Collapse icon for the Tree node. */
  collapseIcon: PropTypes.element,

  /** Expand icon for the Tree node. */
  expandIcon: PropTypes.element,

  /** Icon to appear before the label. */
  itemIcon: PropTypes.element,

  /** Drag icon to appear before collapse/expand icon. */
  dragIcon: PropTypes.element,

  /** Disables the Tree node and its children. */
  disabled: PropTypes.bool,
};

function getAllNodeIds(array: TreeItem[] | undefined): number[] {
  if (!array) return [];
  return array.reduce<number[]>((r, { id, children }) => {
    r.push(id, ...getAllNodeIds(children));
    return r;
  }, []);
}
const noop = () => {
  // do nothing
};
const TreeViewContent: React.FunctionComponent<
  React.HTMLProps<HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div
      className={classNames('d-flex align-items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
};
const TreeViewItem = React.forwardRef<HTMLLIElement, TreeViewItemProps>(
  (
    {
      className,
      children,
      nodeId,
      label,
      collapseIcon,
      expandIcon,
      itemIcon,
      dragIcon,
      disabled,
      ...rest
    }: TreeViewItemProps,
    ref,
  ) => {
    const treeViewContext = useContext(TreeViewContext);
    const {
      id: rootId,
      size,
      registerNode,
      unRegisterNode,
      isExpanded,
      isNodeInFocus,
      isNodeSelected,
      isCheckBoxSelected,
      toggleExpansion,
      toggleNodeSelection,
      toggleSingleCheckBoxSelection,
      toggleMultiCheckBoxSelection,
      focusNode,
      onKeyPress,
      isIndeterminate,
      checkBoxSelection,
      multiSelectCheckBox,
      collapseIcon: defaultCollapseIcon,
      expandIcon: defaultExpandIcon,
      itemIcon: defaultItemIcon,
      dragIcon: defaultDragIcon,
    } = treeViewContext || {};

    const defaultRef = React.useRef<HTMLLIElement>(null);
    const resolvedRef = (ref ||
      defaultRef) as React.MutableRefObject<HTMLLIElement>;

    // Used while navigating through keyboard interactions to decide whether to trigger focus on the tree item or not
    // value will be null until a focus event occurs
    const focusSource = useRef(null);

    // Used by descendant context to find the index of repositioned elements
    const [treeItemElement, setTreeItemElement] =
      useState<HTMLLIElement | null>(null);

    const expandable = Boolean(
      Array.isArray(children) ? children.length : children,
    );
    const expanded = isExpanded ? isExpanded(nodeId) : false;
    const nodeSelected = isNodeSelected ? isNodeSelected(nodeId) : false;
    const checkBoxSelected = isCheckBoxSelected
      ? isCheckBoxSelected(nodeId)
      : false;
    const checkBoxIndeterminate =
      checkBoxSelection && expandable && isIndeterminate
        ? isIndeterminate(nodeId)
        : false;
    const inFocus = isNodeInFocus && isNodeInFocus(nodeId);

    const finalExpandIcon = expandIcon || defaultExpandIcon || (
      <i className="modus-icons">chevron_down_thick</i>
    );
    const finalCollapseIcon = collapseIcon || defaultCollapseIcon || (
      <i className="modus-icons">chevron_right</i>
    );
    const finalItemIcon = itemIcon || defaultItemIcon;
    const finalDragIcon = dragIcon || defaultDragIcon;
    const blankIcon = <i className="modus-icons">blank</i>;

    const defaultTabIndex = disabled ? -1 : 0;
    const ariaLabel = rest['aria-label'] || 'Tree Item';

    const {
      parentId,
      level,
      index,
      descendants,
      updateCheckboxSelectionOnParent,
      ...descendantContext
    } = useDescendants({
      nodeId,
      element: treeItemElement,
      hasCheckBoxSelected: isCheckBoxSelected,
      handleCheckboxSelection: toggleMultiCheckBoxSelection,
    });
    const currentLevel = level !== undefined ? level : 0;

    useEffect(() => {
      if (registerNode)
        registerNode({ id: nodeId, parentId, label, disabled, index });
      return () => {
        if (unRegisterNode) unRegisterNode(nodeId);
      };
    }, [
      registerNode,
      unRegisterNode,
      nodeId,
      parentId,
      label,
      disabled,
      index,
    ]);

    // This effect is used for focussing the tree item element while using keyboard interactions like arrow up/down key
    useEffect(() => {
      const ele = resolvedRef.current;
      if (inFocus && !focusSource.current) {
        ele.focus();
      }
    }, [inFocus, resolvedRef]);

    useEffect(() => {
      if (resolvedRef.current) setTreeItemElement(resolvedRef.current);
    }, [resolvedRef]);

    const handleNodeSelection = React.useCallback(
      (e: any) => {
        if (toggleNodeSelection) toggleNodeSelection(e, nodeId);
      },
      [toggleNodeSelection, nodeId],
    );

    const handleCheckBoxSelection = React.useCallback(
      (e: any) => {
        e.stopPropagation();
        if (multiSelectCheckBox) {
          const all = [...getAllNodeIds(descendants), nodeId];
          let checked: number[] = [];
          let unchecked: number[] = [];

          // toggle checkbox selection on children
          if (isCheckBoxSelected && isCheckBoxSelected(nodeId)) unchecked = all;
          else checked = all;

          // if parent is not a root node update checkbox selection state at the parent node
          if (updateCheckboxSelectionOnParent)
            updateCheckboxSelectionOnParent(e, nodeId, checked, unchecked);
          else if (toggleMultiCheckBoxSelection)
            toggleMultiCheckBoxSelection(e, checked, unchecked);
        } else if (toggleSingleCheckBoxSelection)
          toggleSingleCheckBoxSelection(e, nodeId);
      },
      [
        descendants,
        multiSelectCheckBox,
        isCheckBoxSelected,
        toggleSingleCheckBoxSelection,
        toggleMultiCheckBoxSelection,
        updateCheckboxSelectionOnParent,
        nodeId,
      ],
    );

    const handleExpansion = React.useCallback(
      (e: any) => {
        e.stopPropagation();
        if (toggleExpansion) toggleExpansion(e, nodeId);
      },
      [toggleExpansion, nodeId],
    );

    const handleFocus = React.useCallback(
      (e: any) => {
        // do not update focus state if it is in a disabled state or if already in focus
        if (disabled || inFocus) return;
        focusSource.current = e.target;
        if (focusNode) focusNode(nodeId);
        e.preventDefault();
      },
      [disabled, inFocus, focusNode, nodeId],
    );

    const handleBlur = React.useCallback(() => {
      focusSource.current = null;
    }, []);

    const stopPropagation = React.useCallback(
      (e, flag) => flag && e.stopPropagation(),
      [],
    );

    return (
      <>
        <TreeViewItemStyled
          level={currentLevel}
          checkBoxSelection={checkBoxSelection ? 'true' : 'false'}
          itemIcon={finalItemIcon ? 'true' : 'false'}
          role="treeitem"
          aria-expanded={expandable ? expanded : undefined}
          aria-selected={nodeSelected}
          aria-disabled={disabled}
          aria-level={currentLevel}
          aria-label={ariaLabel}
          className={classNames(
            'list-group-item list-item-leftright-control',
            nodeSelected && 'active',
            disabled && 'disabled',
            className,
          )}
          tabIndex={defaultTabIndex}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (
              e.target === e.currentTarget &&
              onKeyPress &&
              toggleNodeSelection
            )
              onKeyPress(e, () => toggleNodeSelection(e, nodeId));
          }}
          onClick={handleNodeSelection}
          ref={resolvedRef}
          {...rest}
        >
          <TreeViewContent>
            <div
              style={{ display: 'inline-flex' }}
              tabIndex={finalDragIcon ? defaultTabIndex : -1}
              onClick={(e) => stopPropagation(e, !!finalDragIcon)}
              role="button"
              aria-label="Drag the item"
            >
              {finalDragIcon || blankIcon}
            </div>
            <span className="tree-item-level" />
            <div
              style={{ display: 'inline-flex' }}
              tabIndex={expandable ? defaultTabIndex : -1}
              onKeyDown={(e) => {
                if (onKeyPress && toggleExpansion)
                  onKeyPress(e, () => toggleExpansion(e, nodeId));
              }}
              onClick={expandable ? handleExpansion : noop}
              onFocus={noop} // to retain focus
              role="button"
              aria-label="Expand/Collapse"
            >
              {expandable
                ? (expanded && finalExpandIcon) || finalCollapseIcon
                : blankIcon}
            </div>
          </TreeViewContent>

          {checkBoxSelection && (
            <TreeViewContent onClick={(e) => stopPropagation(e, true)}>
              <IndeterminateCheckbox
                aria-label={`${
                  checkBoxSelected ? 'Select' : 'Unselect'
                } ${ariaLabel}`}
                checked={checkBoxSelected}
                id={`${rootId}_cbselection_${nodeId}`}
                indeterminate={checkBoxIndeterminate}
                tabIndex={defaultTabIndex}
                onKeyDown={(e) => {
                  if (e.key !== ' ' && onKeyPress)
                    onKeyPress(e, () => handleCheckBoxSelection(e));
                }}
                onChange={handleCheckBoxSelection}
                onFocus={noop} // to retain focus
                size={size}
              />
            </TreeViewContent>
          )}

          {finalItemIcon && (
            <TreeViewContent
              tabIndex={defaultTabIndex}
              onClick={(e) => stopPropagation(e, true)}
            >
              {finalItemIcon}
            </TreeViewContent>
          )}
          <div
            role="heading"
            className="d-flex align-items-center"
            aria-level={currentLevel}
          >
            <div role="button">{label}</div>
          </div>
        </TreeViewItemStyled>

        {children && (
          <TreeViewItemContext.Provider
            value={{
              level: currentLevel + 1,
              parentId: nodeId,
              ...descendantContext,
            }}
          >
            <TreeViewItemGroupStyled
              className="list-group"
              expanded={expanded ? 'true' : 'false'}
              role="tree"
            >
              {children}
            </TreeViewItemGroupStyled>
          </TreeViewItemContext.Provider>
        )}
      </>
    );
  },
);

TreeViewItem.displayName = 'TreeViewItem';
TreeViewItem.propTypes = propTypes;

export default TreeViewItem;
