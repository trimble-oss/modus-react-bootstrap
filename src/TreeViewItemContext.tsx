import * as React from 'react';
import { TreeItem } from './types';

interface TreeViewItemContextProps {
  parentId?: number;
  level: number;
  registerDescendant?: (
    id: number,
    children: TreeItem[],
    element: any,
  ) => number;
  unRegisterDescendant?: (id: number) => void;
  updateDescendant?: (id: number, children: TreeItem[], element: any) => void;
  updateCheckboxSelection?: (
    event: any,
    id: number,
    selected: number[],
    unselected: number[],
  ) => void;
}
const TreeViewItemContext =
  React.createContext<TreeViewItemContextProps | null>(null);
export default TreeViewItemContext;
