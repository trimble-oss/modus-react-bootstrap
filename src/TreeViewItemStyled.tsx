/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import styled from 'styled-components';

export const TreeViewItemStyled = styled.div<{
  level: number;
  hasCheckBoxSelection: string;
  hasItemIcon: string;
}>`
  grid-template-columns: min-content ${(props) =>
      props.hasCheckBoxSelection === 'true' && 'min-content'} ${(props) =>
      props.hasItemIcon === 'true' &&
      'min-content'} auto min-content !important;

  .item-indent {
    padding-left: ${(props) =>
      props.level > 0 ? (props.level - 1) * 0.5 : 0}rem !important;
  }
`;

export default TreeViewItemStyled;
