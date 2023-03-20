/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

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
