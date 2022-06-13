import styled, { css } from "styled-components"

const TableStyled = styled.table`
  ${props =>
    props.className.indexOf("table-sticky-first-column") > -1 &&
    css`
      th:first-child,
      td:first-child {
        left: 0;
        z-index: 2;
        position: sticky !important;
        background-color: #fff;
      }

      tbody tr:hover {
        background-color: #dcedf9 !important;
      }
    `}

  ${props =>
    props.className.indexOf("table-sticky-first-column") > -1 &&
    props.className.indexOf("table-bordered") > -1 &&
    css`
      th:first-child,
      td:first-child {
        border-right-width: 2px !important;
      }
    `}
`
export default TableStyled
