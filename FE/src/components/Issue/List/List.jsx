import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel } from '@material-ui/core';

const List = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          // checked={rowCount > 0 && numSelected === rowCount}
          // onChange={onSelectAllClick}
          // inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {/* {headCells.map((headCell) => ( */}
        <TableCell
        // key={headCell.id}
        // align={headCell.numeric ? 'right' : 'left'}
        // padding={headCell.disablePadding ? 'none' : 'default'}
        // sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
          // active={orderBy === headCell.id}
          // direction={orderBy === headCell.id ? order : 'asc'}
          // onClick={createSortHandler(headCell.id)}
          >
            {/* {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null} */}
          </TableSortLabel>
        </TableCell>
        {/* ))} */}
      </TableRow>
    </TableHead>
  );
};

export default List;
