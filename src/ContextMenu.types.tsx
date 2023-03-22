/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

export type ContextMenuState = {
  positionX: string | number;
  positionY: string | number;
  items: ContextMenuItem[];
};

export type ContextMenuItem = {
  title: React.ReactNode;
  onClick?: (...args: any) => void;
  children?: ContextMenuItem[];
};
