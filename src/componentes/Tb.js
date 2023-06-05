import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = () => {
  let arreglo = []
  for (let i = 1; i <= 50; i++) {
    arreglo.push({"num": i, "cuad": (i*i)})
  }
  return JSON.stringify(arreglo)
}
/*const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];*/

const Tabla = () => {
  //should be memoized or stable

  const columns = useMemo(
    () => [
      {
        accessorKey: 'num', //access nested data with dot notation
        header: 'Numero',
        size: 5,
      },
      {
        accessorKey: 'cuad',
        header: 'Cuadrado',
        size: 5,
      },
    ],
    [],
  );

  return <MaterialReactTable
    columns={columns}
    data={data}
    enableColumnActions={false}
    enableColumnFilters={false}
    enablePagination={false}
    enableSorting={false}
    enableBottomToolbar={false}
    enableTopToolbar={false}
    muiTableBodyRowProps={{ hover: false }}
    muiTableProps={{
      sx: {
        border: '1px solid rgba(81, 81, 81, 1)',
      },
    }}
    muiTableHeadCellProps={{
      sx: {
        border: '1px solid rgba(81, 81, 81, 1)',
      },
    }}
    muiTableBodyCellProps={{
      sx: {
        border: '1px solid rgba(81, 81, 81, 1)',
      },
    }}
  />;
};
export default Tabla;
