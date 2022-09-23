import * as React from "react"
import Table from "../../../../src/Table"
import styled from "styled-components"

type propType = {
  key: string
  type: string
  description: string | React.ReactNode
}

// for the API section
function sortFn(a, b) {
  if (a.key > b.key) {
    return 1
  }
  if (a.key < b.key) {
    return -1
  }
  return 0
}
export const DataTableColumnAPIInfo = [
  {
    key: "accessor",
    type: "string",
    required: true,
    description: "This is the unique ID for the column.",
  },
  {
    key: "Header",
    type: "string | Function | React.Component => JSX",
    description: "Used for rendering column header content.",
  },
  {
    key: "Cell",
    type: "Function | React.Component => JSX",
    description: "Used for rendering custom table body cell content.",
  },
  {
    key: "width",
    type: "number",
    description: "Specifies the width for the column.",
  },
  {
    key: "minWidth",
    type: "number",
    description: "Specifies the minimum width for the column.",
  },
  {
    key: "maxWidth",
    type: "number",
    description: "Specifies the maximum width for the column.",
  },
  {
    key: "disableResizing",
    type: "boolean",
    description: "Disables resizing for the column.",
  },
  {
    key: "sortBy",
    type: "boolean",
    description: "Enables sorting for the column.",
  },
  {
    key: "sortDescFirst",
    type: "boolean",
    description:
      "The first sort direction for this column will be descending instead of ascending.",
  },
  {
    key: "sortType",
    type: "string | Function(rowA: <Row>, rowB: <Row>, columnId: String, desc: Bool)",
    description:
      "String options are basic, datetime, alphanumeric. Default is alphanumeric. The resolved function from the this string/function will be used to sort the this column's data.",
  },
  {
    key: "allowDrop",
    type: "boolean",
    description:
      "Allows dropping over the column. Used when drag and drop columns.",
  },
  {
    key: "allowDrag",
    type: "boolean",
    description:
      "Allows dragging of the column. Used when drag and drop columns.",
  },
  {
    key: "Filter",
    type: "Function | React.Component => JSX",
    description: (
      <>
        This function (or component) is used to render this column's filter UI.
        It receives the table and column instance objects as props.
        <br />
        Some of the props used for filter are: filterValue, preFilteredRows,
        setFilter, render
        <br />
        <ul>
          <li>filterValue: The current filter value of the column.</li>
          <li>
            preFilteredRows: The array of rows that were originally passed to
            this column's filter before filtering took place.
          </li>
          <li>
            setFilter: Function to set the current filter value for the column.
          </li>
          <li>
            render: Function that takes a string value ex: 'Header' to render
            the column header text.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "disableFilters",
    type: "boolean",
    description: "Filtering for the column will be disabled.",
  },
].sort(sortFn) as propType[]

export const DataTableColumnInstanceAPIInfo = [
  {
    key: "canFilter",
    description: "Denotes whether a column is filterable.",
    type: "boolean",
  },
  {
    key: "filterValue",
    type: "any",
    description: "The current filter value for the column.",
  },
  {
    key: "preFilteredRows",
    type: "Array<row>",
    description:
      "The array of rows that were originally passed to this column's filter before filtering took place.",
  },
  {
    key: "filteredRows",
    type: "Array<row>",
    description:
      "The resulting array of rows received from this column's filter after filtering took place.",
  },
  {
    key: "canResize",
    type: "boolean",
    description: "Indicates if the column can be resized.",
  },
  {
    key: "isResizing",
    type: "boolean",
    description: "Indicates if the column is currently being resized.",
  },
  {
    key: "canSort",
    type: "boolean",
    description: "Denotes whether a column is sortable.",
  },
  {
    key: "isSorted",
    type: "boolean",
    description: "Denotes whether this column is currently being sorted.",
  },
  {
    key: "sortedIndex",
    type: "number",
    description:
      "If the column is currently sorted the index will be order of sorted columns. If not sorted the index will be -1.",
  },
  {
    key: "isSortedDesc",
    type: "boolean",
    description:
      "Denotes whether the column's sort direction is descending or not.",
  },
].sort(sortFn) as propType[]

// for the example section
export const TableBasic = `
<Table bordered>
  <thead className="thead-light">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry </td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
`

export const TableHoverable = `
<Table hover bordered>
  <thead className="thead-light">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry </td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
`

export const TableIconsControls = `
<Table bordered>
  <thead className="thead-light">
    <tr>
      <th scope="col" className="icon-only"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col" className="icon-only"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="icon-only">
        <Button variant="icon-only" className="btn-text-dark rounded-circle">
          <i className="modus-icons">folder</i>
        </Button>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic1-tb1"
            bsPrefix
            className="btn-icon-only"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <FormCheck custom defaultChecked id="tableCheckbox1-tb1" aria-label="Select"></FormCheck>
      </th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic2-tb1"
            bsPrefix
            className="btn-icon-only"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <Form.Check
          type="radio"
          custom
          defaultChecked
          id="tableradio1-tb1"
          aria-label="Select"
        ></Form.Check>
      </th>
      <td>John</td>
      <td>Snow</td>
      <td>@jsnow</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic3-tb1"
            bsPrefix
            className="btn-icon-only"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <Form.Switch custom defaultChecked id="tableSwitch1-tb1" aria-label="Switch"></Form.Switch>
      </th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic4-tb1"
            bsPrefix
            className="btn-icon-only"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  </tbody>
</Table>
`

export const TableSmall = `
<Table bordered hover size="sm">
  <thead className="thead-light">
    <tr>
      <th scope="col" className="icon-only"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col" className="icon-only"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="icon-only">
        <Button
          variant="icon-only"
          size="sm"
          className="btn-text-dark rounded-circle"
        >
          <i className="modus-icons">folder</i>
        </Button>
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic1-tb2"
            bsPrefix
            className="btn-icon-only"
            size="sm"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <FormCheck
          custom
          defaultChecked
          id="tableCheckbox1-tb2"
          aria-label="Select"></FormCheck>
      </th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic2-tb2"
            bsPrefix
            className="btn-icon-only"
            size="sm"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <Form.Check
          type="radio"
          custom
          defaultChecked
          id="tableradio1-tb2"
          aria-label="Select"
        ></Form.Check>
      </th>
      <td>John</td>
      <td>Snow</td>
      <td>@jsnow</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic3-tb2"
            bsPrefix
            className="btn-icon-only"
            size="sm"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr>
      <th scope="row" className="icon-only">
        <Form.Switch
          custom
          defaultChecked
          id="tableSwitch1-tb2"
          aria-label="Switch"
        ></Form.Switch>
      </th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td className="icon-only">
        <Dropdown>
          <Dropdown.Toggle
            variant="text-dark"
            id="dropdown-basic4-tb2"
            bsPrefix
            className="btn-icon-only"
            size="sm"
          >
            <i className="modus-icons">more_vertical</i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  </tbody>
</Table>
`

export const TableStyled = styled(Table)`
  margin: 0;
  width: 100%;
  height: 100%;

  th .modus-icons.material-icons.sorted,
  th .modus-icons.material-icons.unsorted {
    vertical-align: text-bottom;
    font-size: 1rem;
    cursor: pointer;
  }
  th .modus-icons.material-icons.unsorted {
    opacity: 0.5;
  }
  th .modus-icons.material-icons.unsorted:hover {
    opacity: 1;
  }
`

export const TableWithSorting = `
const NUMBER_OF_ROWS = 50
const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Visits",
    accessor: "visits",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Profile Progress Status",
    accessor: "progress",
  },
]

const ModusSortArrows = {
  asc: {
    icon: "sort_alpha_up",
    title: "Sort Descending",
  },
  desc: {
    icon: "sort_alpha_down",
    title: "Sort Ascending",
  },
}

const SortIcon = ({ sort, title, className }) => (
  <i
    className={"modus-icons material-icons ".concat(className)}
    data-toggle="tooltip"
    data-placement="top"
    title={title || ModusSortArrows[sort].title}
  >
    {ModusSortArrows[sort].icon}
  </i>
)


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}
function sort(array, comparator) {
  const mapped = array.map((el, index) => [el, index])
  mapped.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return mapped.map(el => el[0])
}

function Example() {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState(null)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = useMemo(() => makeData(NUMBER_OF_ROWS), [])

  const handlePageSizeChange = pageSize => {
    setPageSize(pageSize)
    setPage(0)
  }

  const handlePageChange = page => {
    setPage(page)
  }

  const handleSort = (event, sortBy) => {
    const isAsc = orderBy === sortBy && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(sortBy)
  }

  /* Styled Component <TableStyled> :
  const TableStyled = styled(Table)
    margin: 0;
    width: 100%;
    height: 100%;

    th .modus-icons.material-icons.sorted,
    th .modus-icons.material-icons.unsorted {
      vertical-align: text-bottom;
      font-size: 1rem;
      cursor: pointer;
    }
    th .modus-icons.material-icons.unsorted {
      opacity: 0.5;
    }
    th .modus-icons.material-icons.unsorted:hover {
      opacity: 1;
    }
  */

  return (
    <Container className="w-100 p-0">
      <TableStyled bordered hover>
        <thead className="bg-gray-light sticky-top">
          <tr>
            {columns.map((column,index) => (
              <th key={index} className="pr-2" title="">
                <div
                  className="d-flex flex-row justify-content-center"
                  style={{ width: "100%" }}
                >
                  <div className="flex-grow-1">{column.Header}</div>
                  <div onClick={e => handleSort(e, column.accessor)}>
                    {column.accessor == orderBy ? (
                      <SortIcon className="sorted" sort={order} />
                    ) : (
                      <SortIcon
                        className="unsorted"
                        title="Sort Ascending"
                        sort="asc"
                      />
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sort(data, getComparator(order, orderBy))
            .slice(page * pageSize, page * pageSize + pageSize)
            .map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map(({ accessor }) => (
                    <td key={accessor}>{row[accessor]}</td>
                  ))}
                </tr>
              )
            })}
        </tbody>
      </TableStyled>
      <TablePagination
        pageSize={pageSize}
        pageIndex={page}
        count={data.length}
        pageSizeOptions={[10, 20, 50]}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      ></TablePagination>
    </Container>
  )
}

render(<Example />);`

export const DataTableWithSorting = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortBy: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
      },
      {
        Header: "Age",
        accessor: "age",
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(30), [])

  return (
    <DataTable
      id="dt_sorting"
      columns={columns} bordered hover
      pageSize={7}
      pageSizeOptions={[7, 10, 25, 50]}
      data={data}
    ></DataTable>
  );
}

render(<Example />);`

export const DataTableWithScroll = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(30), [])

  return (
    <DataTable
      id="dt_scroll"
      columns={columns} bordered hover
      data={data}
      pageSize={7}
      pageSizeOptions={[7, 10, 25, 50]}
      style={{ maxHeight: "400px" }}
    ></DataTable>
  );
}

render(<Example />);`

export const DataTableWithoutPagination = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(10), [])

  return (
    <DataTable
      id="dt_wo_pagination"
      columns={columns} bordered hover
      data={data}
      disablePagination
    ></DataTable>
  );
}
render(<Example />);`

export const DataTableWithColumnResize = `
function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        minWidth: 80,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
        minWidth: 80,
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: 60,
        minWidth:60,
        sortBy: true,
        disableResizing: true,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 60,
        minWidth:60,
        disableResizing: true,
      },
      {
        Header: "Status",
        accessor: "status",
        sortBy: true,
        minWidth: 70,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(30), [])

  return (
    <DataTable
      id="dt_resize_columns"
      columns={columns} bordered hover
      data={data}
      pageSize={7}
      pageSizeOptions={[7, 10, 25, 50]}
      resizeColumns
    ></DataTable>
  );
}

render(<Example />);`

export const DataTableWithSingleRowSelection = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(30), [])

  const [selectedRows , setRowsSelected] = useState([])
  const handleOnRowSelection = React.useCallback((rows) => {
    setRowsSelected(rows)
  },[setRowsSelected])

  return (
    <div>
        <DataTable
          id="dt_row_selection"
          columns={columns} bordered hover
          data={data}
          pageSize={7}
          pageSizeOptions={[7, 10, 25, 50]}
          onRowSelectionChange={handleOnRowSelection}
        ></DataTable>
      {selectedRows &&
        selectedRows.map(row => {
          return (
            <Toast className="toast-primary" key={row.firstName}>
              Successfully selected {row.firstName}, Age - {row.age},
              Visits - {row.visits}, Status - {row.status} !!
            </Toast>
          )
        })}
    </div>
  );
}

render(<Example />);`

export const DataTableWithMultiRowSelection = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
        sortBy: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(30), [])

  const [selectedRows, setRowsSelected] = React.useState([])
  const handleOnRowSelection = React.useCallback((rows) => {
    setRowsSelected(rows)
  },[setRowsSelected])

  return (
    <div>
        <DataTable
          id="dt_multi_row_selection"
          columns={columns} bordered hover
          data={data}
          pageSize={7}
          pageSizeOptions={[7, 10, 25, 50]}
          multipleRowSelection
          onRowSelectionChange={handleOnRowSelection}
        ></DataTable>
      {selectedRows &&
        selectedRows.map(row => {
          return (
            <Toast className="toast-primary" key={row.firstName}>
              Successfully selected {row.firstName}, Age - {row.age},
              Visits - {row.visits}, Status - {row.status} !!
            </Toast>
          )
        })}
    </div>
  );
}
render(<Example />);`

export const DataTableWithCheckBoxSelection = `function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: 50,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 50,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(20), [])
  const [selectedRows, setRowsSelected] = React.useState([])
  const handleOnRowSelection = React.useCallback((rows) => {
    setRowsSelected(rows)
  },[setRowsSelected])

  return (
    <div>
        <DataTable
          id="dt_cb_selection"
          columns={columns}
          bordered
          hover
          pageSize={7}
          pageSizeOptions={[7, 10, 25, 50]}
          multipleRowSelection
          checkBoxRowSelection
          data={data}
          onRowSelectionChange={handleOnRowSelection}
        ></DataTable>
        {selectedRows &&
          selectedRows.map(row => {
            return (
              <Toast className="toast-primary" key={row.firstName}>
                Successfully selected {row.firstName}, Age - {row.age},
                Visits - {row.visits}, Status - {row.status} !!
              </Toast>
            )
          })}
    </div>
  );
}

render(<Example />);`

export const DataTableWithCustomCheckBoxSelection = `function Example() {
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate,id, ...props }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return <Form.Check custom id={id} ref={resolvedRef} {...props} />
    }
  )

  const columns = React.useMemo(
    () => [
      {
        accessor: "selector",
        width: 50,
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <IndeterminateCheckbox id="tableCbMultiRowSel_checkbox_header"
          {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => (
          <IndeterminateCheckbox id={"tableCbMultiRowSel_checkbox_".concat(row.id)}
          {...row.getToggleRowSelectedProps()} />
        ),
      },
     {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: 50,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        width: 50,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(20), [])

  const [selectedRows, setRowsSelected] = React.useState([])
  const handleOnRowSelection = React.useCallback((rows) => {
    setRowsSelected(rows)
  },[setRowsSelected])

  return (
    <div>
        <DataTable
          id="dt_custom_cb_selection"
          columns={columns} bordered hover
          data={data}
          pageSize={7}
          pageSizeOptions={[7, 10, 25, 50]}
          multipleRowSelection
          checkBoxRowSelection
          onRowSelectionChange={handleOnRowSelection}
        ></DataTable>
        {selectedRows &&
          selectedRows.map(row => {
            return (
              <Toast className="toast-primary" key={row.firstName}>
                Successfully selected {row.firstName}, Age - {row.age},
                Visits - {row.visits}, Status - {row.status} !!
              </Toast>
            )
          })}
    </div>
  );
}

render(<Example />);`

export const DataTableWithStickyFirstColumn = `function Example() {
  const columns = React.useMemo(
    () => [
     {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(7), [])

  return (
    <DataTable
      id="dt_sticky_column"
      columns={columns} bordered hover
      data={data}
      stickyFirstColumn
    ></DataTable>
  );
}

render(<Example />);`

export const DataTableWithColumnFilter = `
function TextFilter({
  column: { filterValue, preFilteredRows, setFilter, id, render },
}) {
  const count = preFilteredRows.length
  return (
    <Form.Group controlId="textFilter">
      <Form.Label>{render("Header")}</Form.Label>
      <div className="input-with-icon-left">
        <Form.Control
          as="input"
          placeholder={render("Header")}
          value={filterValue || ""}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
        ></Form.Control>
        <div className="input-icon">
          <i className="modus-icons material-icons">search</i>
        </div>
      </div>
    </Form.Group>
  )
}

function SliderFilter({
  column: { filterValue, preFilteredRows, setFilter, id, render },
}) {
  return (
    <Form.Group controlId="sliderFilter" custom>
      <Form.Label>{render("Header")}</Form.Label>
      <Form.Control
        type="range"
        min={0}
        max={100}
        value={filterValue || 0}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
        custom
      />
    </Form.Group>
  )
}

function SelectFilter({
  column: { filterValue, preFilteredRows, setFilter, id, render },
}) {
  return (
    <Form.Group controlId="selectFilter">
      <Form.Label>{render("Header")}</Form.Label>
      <Form.Control
        as="select"
        custom
        value={filterValue || ""}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        <option>Pending</option>
        <option>Verified</option>
        <option>Rejected</option>
      </Form.Control>
    </Form.Group>
  )
}

function FilterPanel(
  columns,
  activeFilters,
  resetFilter,
  resetAllFilters,
  globalFilter,
  setGlobalFilter
) {
  const popover = (
    <Popover id="popover-basic" style={{ width: "500px", maxWidth: "500px" }}>
      <Popover.Content>
        <Container style={{ width: "100%" }} className="p-1">
          <Row xs={1} md={2}>
            {columns
              .map(column => (
                <div key={column.id}>
                  <Col>{column.render("Filter")}</Col>
                </div>
              ))}
          </Row>
          <Row className="d-flex justify-content-end mr-2">
            <Button onClick={e => resetAllFilters()}>Reset</Button>
          </Row>
        </Container>
      </Popover.Content>
    </Popover>
  )

  const DismissibleChip = ({ label, onClose, ...props }) => {
    const [show, setShow] = useState(true)
    const handleClose = useCallback(() => {
      setShow(!show)
      onClose()
    }, [setShow])
    return (
      <Chip
        label={label}
        onClose={handleClose}
        show={show}
        variant="outline"
        type="input"
        className="m-1"
      ></Chip>
    )
  }

  return (
    <div className="d-flex align-items-center">
      <div className="flex-grow-1">
        {activeFilters && activeFilters.length > 0 && (
          <div>
            Active Filters:
            {columns.map(column => {
              const filter = activeFilters.find(f => f.id === column.id)
              const value = filter && filter.value
              return (
                value && (
                  <DismissibleChip
                    key={column.id}
                    label={column
                      .render("Header")
                      .toString()
                      .concat(": ", filter.value)}
                    onClose={e => resetFilter(column.id)}
                  />
                )
              )
            })}
          </div>
        )}
      </div>
      <div style={{ minWidth: "170px", lineHeight: 2 }}>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={popover}
          rootClose
        >
          <Nav.Link eventKey="1" className="p-0">
            <i
              className="modus-icons material-icons left-icon p-1"
              style={{ top: "5px", fontSize: "20px" }}
            >
              filter
            </i>
            FILTER COLUMNS
          </Nav.Link>
        </OverlayTrigger>
      </div>
    </div>
  )
}
function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortBy: true,
        Filter: TextFilter,
        width: 80,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
        Filter: TextFilter,
        width: 80,
      },
      {
        Header: "Age",
        accessor: "age",
        Filter: SliderFilter,
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectFilter,
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = React.useMemo(() => makeData(7), [])

  return (
      <DataTable
        id="dt_filter"
        columns={columns} bordered hover
        data={data}
        filterPanel={FilterPanel}
      ></DataTable>
  )
}

render(<Example />);`

export const Editable = styled.div`
  td:nth-child(-n + 3) {
    padding: 0;
  }

  td div.cell-editable {
    width: 100%;
    * {
      padding: 0.25rem 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .form-control:focus {
      border: 0 !important;
      height: 3rem;
    }
    &.cell-editing {
      border: 2px solid #217cbb;
    }
  }
`

export const DataTableWithCellEditable = `function Example() {
  const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const [editMode, setEditMode] = React.useState(false)

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    const handleEdit = e => {
      e.preventDefault()
      setEditMode(true)
    }

    const handleKeyUp = e => {
      if (e.key === "Enter" || e.keyCode === 13) {
        exitEditMode()
      } else {
        setValue(e.target.value)
      }
    }

    const handleBlur = e => {
      exitEditMode()
    }

    const exitEditMode = () => {
      setEditMode(false)
      UpdateMyData(index, id, value)
    }

    return (
      <div
        onClick={handleEdit}
        className={"d-flex align-items-center cell-editable".concat(
          editMode ? " cell-editing" : ""
        )}
      >
        {editMode ? (
          <Form.Control
            as="input"
            defaultValue={value}
            size="lg"
            className="border-0"
            autoFocus
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
          />
        ) : (
          <span data-toggle="tooltip" data-placement="top" title={value}>{value}</span>
        )}
      </div>
    )
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortBy: true,
        width: 80,
        Cell: EditableCell,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
        width: 80,
        Cell: EditableCell,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
        Cell: EditableCell,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const [data, setData] = React.useState(() => makeData(7))

  function UpdateMyData(rowIndex, columnId, value) {
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  // Styled component <Editable> :
  // td:nth-child(-n + 3) {
  //   padding: 0;
  // }
  // td div.cell-editable {
  // width: 100%;
  // * {
  //   padding: 0.25rem 1rem;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 2;
  //   -webkit-box-orient: vertical;
  // }
  // .form-control:focus {
  //   border: 0 !important;
  //   height: 3rem;
  // }
  // &.cell-editing {
  //   border: 2px solid #217cbb;
  // }
  // }

  return (
    <Editable>
      <DataTable
        id="dt_editable"
        columns={columns} bordered hover
        data={data}
        disableRowSelection
      ></DataTable>
    </Editable>
  )
}

render(<Example />);`

export const DataTableWithGlobalFilter = `
function GlobalFilterPanel(
  columns,
  filters,
  resetFilter,
  resetAllFilters,
  globalFilter,
  setGlobalFilter
) {
  return (
    <Form.Group controlId="globalFilter1" className="w-50">
      <div className="d-flex input-with-icon-left">
        <Form.Control
          as="input"
          type="search"
          placeholder="Search"
          value={globalFilter || ""}
          size="lg"
          onChange={e => setGlobalFilter(e.target.value || undefined)}
        ></Form.Control>
        <div className="input-icon">
          <i className="material-icons">search</i>
        </div>
      </div>
    </Form.Group>
  )
}
function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        sortBy: true,
        width: 80,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        sortBy: true,
        width: 80,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        sortBy: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        sortBy: true,
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const [data, setData] = React.useState(() => makeData(10000))

  return (
    <DataTable
      id="dt_global_filter"
      columns={columns} bordered hover
      data={data}
      filterPanel={GlobalFilterPanel}
    ></DataTable>
  )
}

render(<Example />);`

export const DataTableWithDragAndDrop = `
function Example() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 80,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 80,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
      },
      {
        Header: "Age",
        accessor: "age",
        width: 50,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 50,
        sortBy: true,
        allowDrag: true,
        allowDrop: true,
      },
      {
        Header: "Status",
        accessor: "status",
        width: 70,
        allowDrag: true,
        allowDrop: true,
      },
      {
        Header: "Profile Progress Status",
        accessor: "progress",
        width: 70,
        allowDropForColumns: ["status"],
      },
    ],
    []
  )

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const [data, setData] = React.useState(() => makeData(10000))

  return (
    <DataTable
      id="dt_drag_drop"
      columns={columns} bordered hover
      data={data}
      resizeColumns
      multipleRowSelection
      checkBoxRowSelection
    ></DataTable>
  )
}

render(<Example />);`

// for the data generator makeData function
const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const names = [
  "Mickey Mouse",
  "Bugs Bunny",
  "Homer Simpson",
  "Fred Flintstone",
  "Sponge Bob",
  "Daffy Duck",
  "Charlie Brown",
  "Scooby Doo",
  "Tom Cat",
  "Jerry Mouse",
  "Mighty Mouse",
  "Wile E Coyote",
  "Tweety Bird",
  "Pink Panther",
  "Road Runner",
  "Patrick Star",
  "Roger Rabbit",
  "Papa Smurf",
  "Buzz Lightyear",
]
const newPerson = () => {
  const rand = Math.random()
  const namesIndex = Math.floor(rand * (names.length - 1))
  const firstName = names[namesIndex].split(" ")[0]
  const lastName = names[namesIndex].split(" ")[1]
  return {
    firstName,
    lastName,
    age: Math.floor(rand * 30),
    visits: Math.floor(rand * 100),
    progress: Math.floor(rand * 100),
    status: rand > 0.66 ? "Verified" : rand > 0.33 ? "Pending" : "Rejected",
  }
}
export function MakeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
