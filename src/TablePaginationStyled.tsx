/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */

import styled from 'styled-components';

const TablePaginationStyled = styled.div`
  padding: 0.5rem;

  li.page-item.p-0 > .page-link {
    padding: 0;
  }

  li.page-item.p-0 .nav-link {
    padding: calc((2rem - 0.875rem) / 2) 0.75rem;
  }
`;
export default TablePaginationStyled;
