/* eslint-disable */
// @ts-nocheck\
/**
 * Sample project files only for testing purpose
 * Access components like `import TreeView from '../../lib/TreeView';`
 *
 */
import { useMemo } from 'react';
import DataTable from '../../lib/esm/DataTable';

function DataTablePage() {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
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
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress Status',
        accessor: 'progress',
      },
    ],
    [],
  );

  // makeData: a custom helper function to generate random rows
  // for the demo purpose not implemented here in the example.
  const data = [
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      age: 1,
      visits: 1,
      status: 'test',
      progress: 'test',
    },
  ];

  return (
    <DataTable
      id="test_table"
      columns={columns}
      bordered
      hover
      data={data}
      stickyFirstColumn
      style={{ height: '200px' }}
    ></DataTable>
  );
}

export default DataTablePage;
