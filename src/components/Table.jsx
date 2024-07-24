import React, { useMemo, useState, useEffect } from 'react';
import { CheckboxCell, NameWithAvatarCell, StatusCell, TeamsCell } from './CustomCellComponents';
import { Box, Pagination, PaginationItem } from '@mui/material';
import tableConfig from '../tableConfig.json';
import tableData from '../tableData.json';
import { MaterialReactTable } from 'material-react-table';

const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  //useEffect to initially load the data
  useEffect(() => {
    console.log(tableData, "hello this is data");
    setData(tableData);
  }, []);

  //handles the page change during pagiantion
  const handlePageChange = (event, value) => {
    const newPage = Number(value) - 1;
    if (!isNaN(newPage) && newPage >= 0) {
      setPage(newPage);
    }
  };

  const renderCell = (cell, type) => {
    switch (type) {
      case 'checkbox':
        return <CheckboxCell />;
      case 'nameWithAvatar':
        return <NameWithAvatarCell cell={cell} />;
      case 'status':
        return <StatusCell cell={cell} />;
      case 'teams':
        return <TeamsCell cell={cell} />;
      default:
        return cell.getValue();
    }
  };

  const columns = useMemo(() => tableConfig.columns.map(column => ({
    ...column,
    Cell: ({ cell }) => renderCell(cell, column.type),
  })), []);


  //handles the pagination
  const pageSize = 5;
  const paginatedData = useMemo(() => {
    console.log('Current page:', page);
    if (data.length === 0) return [];
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    const dataSlice = data.slice(startIndex, endIndex);
    console.log('Paginated data:', dataSlice);
    return dataSlice;
  }, [data, page, pageSize]);

 
  // case when there's no data to display
  if (data.length === 0) {
    return <Box>No records to display</Box>;
  }

  return (
    <Box>

  {/* main table */}
      <MaterialReactTable
        columns={columns}
        data={paginatedData}
        enableSorting={false}
        enableColumnActions={false}
        paginationOptions={false} // Disabled default pagination according to figma
        state={{ pageIndex: page }}
        paginationDisplayMode='pages'
      />

     {/* handles the pagination functionality */}

     
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(data.length / pageSize)}
          page={page + 1}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              style={{
                backgroundColor: item.page === page + 1 ? '#F0F8FF' : 'transparent',
                color: item.page === page + 1 ? '#0284C7' : 'inherit',
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Table;
