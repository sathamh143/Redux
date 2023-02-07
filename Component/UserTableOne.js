import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {

  const {users} = useSelector(state => state.user)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Device</StyledTableCell>
            <StyledTableCell align="right">user Name</StyledTableCell>
            <StyledTableCell align="right">user Email</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users) => (
              <StyledTableRow key={users.device}>
              <StyledTableCell component="th" scope="row">
                {users.device}
              </StyledTableCell>
              <StyledTableCell align="right">{users.name}</StyledTableCell>
              <StyledTableCell align="right">{users.email}</StyledTableCell>
              <StyledTableCell align="right">{users.password}</StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}