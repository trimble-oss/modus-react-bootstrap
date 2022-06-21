import * as React from 'react';
import { TreeItem } from './types';

export interface TreeViewContextProps {
  id: string;
  size?: string;
  checkBoxSelection?: boolean;
  multiSelectNode?: boolean;
  multiSelectCheckBox?: boolean;
  collapseIcon?: React.ReactElement;
  expandIcon?: React.ReactElement;
  itemIcon?: React.ReactElement;
  dragIcon?: React.ReactElement;
  registerNode: (node: TreeItem) => void;
  unRegisterNode: (nodeId: number) => void;
  isExpanded: (nodeId: number) => boolean;
  isNodeSelected: (nodeId: number) => boolean;
  isIndeterminate: (nodeId: number) => boolean;
  isCheckBoxSelected: (nodeId: number) => boolean;
  isNodeInFocus: (nodeId: number) => boolean;
  toggleExpansion: (event: any, nodeId: number) => void;
  toggleNodeSelection: (event: any, nodeId: number) => void;
  toggleSingleCheckBoxSelection: (event: any, nodeId: number) => void;
  toggleMultiCheckBoxSelection: (
    event: any,
    selected: number[],
    unselected: number[],
  ) => void;
  focusNode: (nodeId: number) => void;
  onKeyPress: (event: any, enterKeyPressAction: () => void) => void;
}

const TreeViewContext = React.createContext<TreeViewContextProps | null>(null);

export default TreeViewContext;
