import styled from 'styled-components';

const TablePaginationStyled = styled.div`
  div.container {
    :first-child {
      padding: 0.5rem;

      li.page-item.p-0 > .page-link {
        padding: 0;
      }

      li.page-item.p-0 .nav-link {
        padding: calc((2rem - 0.875rem) / 2) 0.75rem;
      }
    }
  }
`;
export default TablePaginationStyled;
