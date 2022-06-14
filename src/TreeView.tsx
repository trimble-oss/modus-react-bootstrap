import React, { useRef, useCallback, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import _merge from 'lodash/merge';

import { TreeItem } from './types';
import TreeViewContext from './TreeViewContext';
import TreeViewItemContext from './TreeViewItemContext';
import useCustomState from './useCustomState';
import TreeViewStyled from './TreeViewStyled';
import useTreeViewDescendants from './useTreeViewDescendants';

export interface TreeViewProps
  extends Omit<
    React.HTMLProps<HTMLUListElement>,
    'expanded' | 'selected' | 'size' | 'as'
  > {
  id: string;
  nodeId: number;
  size?: string;
  collapseIcon?: React.ReactElement;
  expandIcon?: React.ReactElement;
  itemIcon?: React.ReactElement;
  dragIcon?: React.ReactElement;
  checkBoxSelection?: boolean;
  multiSelectNode?: boolean;
  multiSelectCheckBox?: boolean;
  expanded?: ReadonlyArray<number>;
  defaultExpanded?: number[];
  defaultSelected?: number[];
  onNodeToggle?: (event: any, expanded: number[]) => void;
  onNodeSelect?: (event: any, selected: number[]) => void;
  onCheckBoxSelect?: (event: any, selected: number[]) => void;
}

const propTypes = {
  /** A HTML id attribute, necessary for proper form accessibility. */

  id: PropTypes.string.isRequired,

  /** An unique numerical id for the root Tree Item, necessary for keyboard navigation */
  nodeId: PropTypes.number.isRequired,

  /**
   * To shrink or large the size of Tree and its items
   * size as `sm` | `lg`.
   */
  size: PropTypes.string,

  /** Default Collapse icon for all the Tree items including root node. */
  collapseIcon: PropTypes.element,

  /** Default Expand icon for all the Tree items including root node. */
  expandIcon: PropTypes.element,

  /** Default icon to appear before the label for all the Tree items including root node. */
  itemIcon: PropTypes.element,

  /** Default Dragging icon to appear before collapse/expand icon for all the Tree items including root node. */
  dragIcon: PropTypes.element,

  /** Enables checkbox selection on all the Tree items. */
  checkBoxSelection: PropTypes.bool,

  /** Enables selection on multiple Tree items by `Shift + Arrow Up/Down` or `Ctrl + click`. */
  multiSelectNode: PropTypes.bool,

  /** Enables checkBox selection on multiple Tree items. */
  multiSelectCheckBox: PropTypes.bool,

  /** Tree items expanded by default. */
  defaultExpanded: PropTypes.arrayOf(PropTypes.number.isRequired),

  /** Tree items selected by default (if multiSelect not enabled only the first value is considered). */
  defaultSelected: PropTypes.arrayOf(PropTypes.number.isRequired),

  /** To expand the Tree items. */
  expanded: PropTypes.arrayOf(PropTypes.number.isRequired),

  /**
   * Callback when a Tree item expands or collapse.
   *
   * ```js
   * function onNodeToggle(event: React.SyntheticEvent, expanded: number[]) => void
   *  expanded: An array of nodeId(s) of expanded Tree Items
   * ```
   */
  onNodeToggle: PropTypes.func,

  /**
   * Callback when Tree item(s) selected.
   *
   * ```js
   * function onNodeSelect(event: React.SyntheticEvent, selected: number[]) => void
   *  selected: An array of nodeId(s) of selected Tree Items
   * ```
   */
  onNodeSelect: PropTypes.func,

  /**
   * Callback when a Tree item checkbox is selected.
   *
   * ```js
   * function onCheckBoxSelect(event: React.SyntheticEvent, selected: number[]) => void
   *  selected: An array of nodeId(s) of checkbox selected Tree Items
   * ```
   */
  onCheckBoxSelect: PropTypes.func,
};

const TreeView = React.forwardRef<HTMLUListElement, TreeViewProps>(
  (
    {
      id,
      nodeId,
      size,
      collapseIcon,
      expandIcon,
      itemIcon,
      dragIcon,
      onNodeToggle,
      onNodeSelect,
      onCheckBoxSelect,
      checkBoxSelection,
      multiSelectNode,
      multiSelectCheckBox,
      defaultExpanded,
      defaultSelected,
      expanded,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const nodes = useRef({});
    const defaultRef = React.useRef<HTMLUListElement>(null);
    const resolvedRef = (ref ||
      defaultRef) as React.MutableRefObject<HTMLUListElement>;
    const [focusNodeId, setFocusNodeId] = useState<number>();
    const [nodesExpanded, setNodeExpanded] = useCustomState(
      expanded,
      defaultExpanded || [],
    );
    const [nodesSelected, setNodeSelected] = useState<number[]>(
      defaultSelected && defaultSelected.length > 1 && !multiSelectNode
        ? [defaultSelected[0]]
        : [],
    );
    const [nodeCheckBoxSelected, setNodeCheckBoxSelected] = useState<number[]>(
      [],
    );
    // Used by descendant context to find the index of repositioned elements
    const [treeItemElement, setTreeItemElement] =
      useState<HTMLUListElement | null>(null);
    const { registerDescendant, unRegisterDescendant, updateDescendant } =
      useTreeViewDescendants({
        nodeId,
        element: treeItemElement,
      });

    useEffect(() => {
      if (resolvedRef.current) setTreeItemElement(resolvedRef.current);
    }, [resolvedRef]);

    // Helpers
    // TODO: Replace the logic getChildrenIds(getNodesArray) to avoid performance issues if any
    function getNodesArray(): TreeItem[] {
      return Object.keys(nodes.current).map((key) => {
        return nodes.current[key];
      });
    }

    function getChildrenIds(
      array: TreeItem[],
      nodeIdVal: number,
      recursive = true,
    ): number[] {
      return array.reduce<number[]>((r, { id: idVal, parentId }) => {
        if (parentId === nodeIdVal) {
          r.push(idVal, ...(recursive ? getChildrenIds(array, idVal) : []));
        }
        return r;
      }, []);
    }

    function getImmediateChildrenIds(idVal) {
      return Object.keys(nodes.current)
        .map((key) => {
          return nodes.current[key];
        })
        .filter((node) => node.parentId === idVal)
        .sort((a, b) => a.index - b.index)
        .map((child) => child.id);
    }

    function getParents(nodeIdVal: number): number[] {
      let { parentId } = nodes.current[nodeIdVal];
      const parents: number[] = [];
      while (parentId != null) {
        parents.push(parentId);
        parentId = nodes.current[parentId].parentId;
      }

      return parents;
    }

    // Handlers
    const handleMultipleSelect = useCallback(
      (value, prevState, recursive = false): number[] => {
        let newSelected = [];
        const oldSelected = prevState || [];

        if (recursive) {
          const array = getNodesArray();
          const childNodes = getChildrenIds(array, value);
          // unselect parents and children
          if (oldSelected.indexOf(value) !== -1) {
            const parents = getParents(value);
            const filtered = oldSelected.filter(
              (id) =>
                childNodes.indexOf(id) < 0 &&
                id !== value &&
                parents.indexOf(id) < 0,
            );

            newSelected = filtered;
          }
          // select children and parents with all child nodes selected
          else {
            const filtered = oldSelected.filter(
              (id) => childNodes.indexOf(id) < 0,
            );
            newSelected = filtered.concat([value], childNodes);
          }
        } else if (oldSelected.includes(value))
          newSelected = oldSelected.filter((id) => id !== value);
        else newSelected = oldSelected.concat(value);

        return newSelected;
      },
      [],
    );

    const handleSingleSelect = useCallback((value, prevState): number[] => {
      const selection: number[] =
        prevState && prevState.includes(value) ? [] : [value];
      return selection;
    }, []);

    // Tree view context
    // Actions
    const registerNode = useCallback((node: TreeItem) => {
      nodes.current[node.id] = node;
    }, []);

    const unRegisterNode = useCallback((nodeIdVal: number) => {
      const newNodes = { ...nodes.current };
      delete newNodes[nodeIdVal];
      nodes.current = newNodes;
    }, []);

    const toggleExpansion = useCallback(
      (event: any, nodeIdValue: number) => {
        let newExpanded: number[] = [];
        const oldExpanded = nodesExpanded || [];
        if (oldExpanded.indexOf(nodeIdValue) !== -1) {
          newExpanded = oldExpanded.filter((id) => id !== nodeIdValue);
        } else {
          newExpanded = [nodeIdValue].concat(oldExpanded);
        }
        setNodeExpanded(newExpanded);
        if (onNodeToggle) {
          onNodeToggle(event, newExpanded);
        }
      },
      [nodesExpanded, setNodeExpanded],
    );

    const toggleNodeSelection = useCallback(
      (event: any, nodeIdValue: number) => {
        const multiple =
          multiSelectNode && (event.shiftKey || event.ctrlKey || event.metaKey);

        let newSelected: number[] = [];
        if (multiple) {
          newSelected = handleMultipleSelect(nodeIdValue, nodesSelected);
        } else {
          newSelected = handleSingleSelect(nodeIdValue, nodesSelected);
        }

        setNodeSelected(newSelected);
        if (onNodeSelect) onNodeSelect(event, newSelected);
      },
      [
        nodesSelected,
        setNodeSelected,
        onNodeSelect,
        handleMultipleSelect,
        handleSingleSelect,
        multiSelectNode,
      ],
    );

    const toggleSingleCheckBoxSelection = useCallback(
      (event: any, nodeIdValue: number) => {
        const prevState = [...nodeCheckBoxSelected];
        const newState =
          prevState && prevState.includes(nodeIdValue) ? [] : [nodeIdValue];
        setNodeCheckBoxSelected(newState);
        if (onCheckBoxSelect) onCheckBoxSelect(event, newState);
      },
      [nodeCheckBoxSelected, setNodeCheckBoxSelected, onCheckBoxSelect],
    );

    const toggleMultiCheckBoxSelection = useCallback(
      (event: any, selected: number[], unselected: number[]) => {
        setNodeCheckBoxSelected((oldItems) => {
          const newItems = [
            ...oldItems.filter((node) => unselected.indexOf(node) < 0),
            ...selected,
          ];
          if (onCheckBoxSelect) onCheckBoxSelect(event, newItems);
          return newItems;
        });
      },
      [setNodeCheckBoxSelected, onCheckBoxSelect],
    );

    const focusNode = useCallback(
      (event: any, nodeIdValue: number) => {
        setFocusNodeId(nodeIdValue);
      },
      [setFocusNodeId],
    );

    // Verifiers
    const isExpanded = useCallback(
      (nodeId: number) =>
        Array.isArray(nodesExpanded)
          ? nodesExpanded.indexOf(nodeId) !== -1
          : false,
      [nodesExpanded],
    );

    const isNodeSelected = useCallback(
      (nodeId: number) => {
        return nodesSelected.indexOf(nodeId) !== -1;
      },
      [nodesSelected],
    );

    const isCheckBoxSelected = useCallback(
      (nodeId: number) =>
        Array.isArray(nodeCheckBoxSelected)
          ? nodeCheckBoxSelected.indexOf(nodeId) !== -1
          : nodeCheckBoxSelected === nodeId,
      [nodeCheckBoxSelected],
    );

    const isIndeterminate = useCallback(
      (nodeId: number) => {
        const childNodes = getChildrenIds(getNodesArray(), nodeId);
        if (!childNodes || childNodes.length === 0) return false;

        const unSelectChildNodes = childNodes.filter(
          (node) => nodeCheckBoxSelected.indexOf(node) < 0,
        );

        if (
          unSelectChildNodes.length !== childNodes.length &&
          unSelectChildNodes.length > 0
        )
          return true;
        return false;
      },
      [nodeCheckBoxSelected],
    );

    const isNodeInFocus = useCallback(
      (nodeId: number) => {
        return focusNodeId === nodeId;
      },
      [focusNodeId],
    );

    const isNodeDisabled = useCallback(
      (nodeIdValue: number) => {
        return nodes.current[nodeIdValue]
          ? nodes.current[nodeIdValue].disabled
          : false;
      },
      [nodes],
    );

    function getNavigableChildrenIds(nodeIdVal) {
      let childrenIds = getImmediateChildrenIds(nodeIdVal);
      childrenIds = childrenIds.filter((node) => !isNodeDisabled(node));
      return childrenIds;
    }

    function getNextNavigatableNode(nodeIdVal) {
      // If expanded get first child
      if (
        isExpanded(nodeIdVal) &&
        getNavigableChildrenIds(nodeIdVal).length > 0
      ) {
        return getNavigableChildrenIds(nodeIdVal)[0];
      }

      let node = nodes.current[nodeIdVal];
      while (node != null) {
        // Try to get next sibling
        const siblings = getNavigableChildrenIds(node.parentId);
        const nextSibling = siblings[siblings.indexOf(node.id) + 1];

        if (nextSibling) {
          return nextSibling;
        }

        // If the sibling does not exist, go up a level to the parent and try again.
        node = nodes.current[node.parentId];
      }

      return nodeIdVal;
    }

    function getPreviousNavigatableNode(id) {
      const node = nodes.current[id];
      const siblings = getNavigableChildrenIds(node.parentId);
      const nodeIndex = siblings.indexOf(id);

      if (nodeIndex === 0) {
        return node.parentId || id;
      }

      let currentNode = siblings[nodeIndex - 1];
      while (
        isExpanded(currentNode) &&
        getNavigableChildrenIds(currentNode).length > 0
      ) {
        currentNode = getNavigableChildrenIds(currentNode).pop();
      }

      return currentNode;
    }

    const handleKeyDown = useCallback(
      (event, enterKeyPressAction) => {
        let flag = false;
        const key = event.key;

        // If the tree is empty there will be no focused node
        if (
          event.altKey ||
          event.currentTarget !== event.target ||
          !focusNodeId
        ) {
          return;
        }

        switch (key) {
          case ' ':
            toggleExpansion(event, focusNodeId);
            flag = true;
            break;
          case 'Enter':
            enterKeyPressAction();
            event.stopPropagation();
            break;
          case 'ArrowDown':
            const nextNode = getNextNavigatableNode(focusNodeId);
            if (
              multiSelectNode &&
              event.shiftKey &&
              isNodeSelected(focusNodeId)
            ) {
              // deselect if going back to the selected node
              if (isNodeSelected(nextNode))
                toggleNodeSelection(event, focusNodeId);
              else toggleNodeSelection(event, nextNode);
            }

            focusNode(event, nextNode);
            flag = true;
            break;
          case 'ArrowUp':
            const nodePrevious = getPreviousNavigatableNode(focusNodeId);
            if (
              multiSelectNode &&
              event.shiftKey &&
              isNodeSelected(focusNodeId)
            ) {
              // deselect if going back to the selected node
              if (isNodeSelected(nodePrevious))
                toggleNodeSelection(event, focusNodeId);
              else toggleNodeSelection(event, nodePrevious);
            }

            focusNode(event, nodePrevious);
            flag = true;
            break;
          case 'ArrowRight':
            if (!isExpanded(focusNodeId)) toggleExpansion(event, focusNodeId);
            break;
          case 'ArrowLeft':
            if (isExpanded(focusNodeId)) toggleExpansion(event, focusNodeId);
            break;

          default:
        }

        if (flag) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      [
        focusNodeId,
        focusNode,
        isExpanded,
        toggleExpansion,
        isNodeSelected,
        toggleNodeSelection,
      ],
    );

    return (
      <TreeViewContext.Provider
        value={{
          id,
          size,
          registerNode,
          unRegisterNode,
          isExpanded,
          isNodeSelected,
          isCheckBoxSelected,
          isIndeterminate,
          isNodeInFocus,
          toggleExpansion,
          toggleNodeSelection,
          toggleSingleCheckBoxSelection,
          toggleMultiCheckBoxSelection,
          onKeyPress: handleKeyDown,
          focusNode,
          checkBoxSelection: checkBoxSelection || multiSelectCheckBox,
          multiSelectCheckBox,
          multiSelectNode,
          collapseIcon,
          expandIcon,
          itemIcon,
          dragIcon,
        }}
      >
        <TreeViewItemContext.Provider
          value={{
            parentId: nodeId,
            level: 1,
            registerDescendant,
            unRegisterDescendant,
            updateDescendant,
          }}
        >
          <TreeViewStyled
            className={classNames(
              'list-group',
              size === 'sm'
                ? 'list-group-condensed'
                : size === 'lg' && 'list-group-lg',
              className,
            )}
            {...props}
            ref={ref}
            id={id}
            role="tree"
          >
            {children}
          </TreeViewStyled>
        </TreeViewItemContext.Provider>
      </TreeViewContext.Provider>
    );
  },
);

TreeView.propTypes = propTypes;
TreeView.displayName = 'TreeView';

export default TreeView;
