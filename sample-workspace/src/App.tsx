import DataTable from '../../lib/DataTable';
import { DataType, MakeData } from './common/DataGenerator';

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    sortBy: true,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    sortBy: true,
  },
  {
    Header: 'Age',
    accessor: 'age',
    sortBy: true,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    sortBy: true,
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortBy: true,
  },
  {
    Header: 'Profile Progress Status',
    accessor: 'progress',
    sortBy: true,
  },
];
const data: DataType[] = MakeData(10000);
function App() {
  return (
    <>
      <DataTable
        id="dt_sorting"
        columns={columns}
        bordered
        hover
        pageSize={7}
        pageSizeOptions={[7, 10, 25, 50]}
        multipleRowSelection
        checkBoxRowSelection
        data={data}
        onRowSelectionChange={(rows) =>
          console.log(`selected rows: ${rows.length}`)
        }
      ></DataTable>
    </>
  );
}

export default App;
