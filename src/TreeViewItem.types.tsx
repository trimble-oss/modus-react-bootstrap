import { ReactNode } from 'react';

export type TreeItem = {
  id: number;
  index: number;
  parentId?: number;
  label?: ReactNode;
  children?: TreeItem[];
  disabled?: boolean;
  element?: any;
};
