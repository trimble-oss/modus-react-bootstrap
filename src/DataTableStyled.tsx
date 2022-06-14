import styled from 'styled-components';

/**
 * Note:
 * 1) Border styles for the Table and its cells have been override here
 * due to border disappearing issue while scrolling with sticky top or sticky column
 */
const DataTableStyled = styled.div`
  .container {
    :first-child {
      padding: 0;
      width: 100%;
    }
  }
  .scrollable.container {
    :first-child {
      overflow-y: auto;
    }
  }

  >div: first-child {
    max-height: inherit;
    max-width: inherit;
    min-height: inherit;
    min-width: inherit;
    width: inherit;
    height: inherit;
  }

  .table {
    :first-child {
      margin: 0;
      width: 100%;
      height: 100%;

      th,
      td {
        align-items: center;
        display: flex;
      }

      th .modus-icons.material-icons.sorted,
      th .modus-icons.material-icons.unsorted {
        vertical-align: text-bottom;
        font-size: 1rem;
        cursor: pointer !important;
      }

      th .modus-icons.material-icons.unsorted {
        opacity: 0.5;
      }

      th .modus-icons.material-icons.unsorted:hover {
        opacity: 1;
      }

      th .table-col-resizable {
        bottom: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 5px;
      }

      th .table-col-resizable:hover {
        background-color: #9bc2f7;
        cursor: ew-resize !important;
      }

      .hidden-column {
        position: relative;
        width: 0;

        div:first-child {
          position: absolute;
          height: 100%;
          z-index: 9999;
          cursor: pointer;
          background-color: #b7b9c3;
          width: 3px;

          .modus-icons {
            width: 0.5rem;
            font-size: 1rem;
          }

          .modus-icons.triangle_left {
            left: calc(-0.5rem + 1px);
          }
          .modus-icons.triangle_right {
            left: calc(-0.5rem + 5px);
          }
        }
      }

      tr.selected {
        background-color: #dcedf9;
      }

      th {
        &.drop-allow {
          border-left: 2px solid #0063a3 !important;
        }
        &.drop-block {
          border-left: 2px solid red !important;
        }
        &.draggable {
          padding-left: 0;
          .th-content {
            cursor: -webkit-grab !important;
            padding-left: 1rem;
          }
        }
      }

      &.table-bordered {
        border: 0;

        th,
        td {
          border: 0;
          border-bottom: 1px solid #b7b9c3;
          border-right: 1px solid #b7b9c3;
        }

        th:last-child,
        td:last-child {
          border-right: 0;
        }

        tbody tr:last-child td {
          border-bottom: 0;
        }
      }

      thead.sticky-top tr,
      thead.sticky-top th {
        box-shadow: 0 2px 0 0 #b7b9c3;
        border-bottom: 0 !important;
      }
    }
  }
  &.table-sticky-first-column {
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

    .table-bordered {
      th:first-child,
      td:first-child {
        border-right-width: 2px !important;
      }
    }
  }
`;
export default DataTableStyled;
