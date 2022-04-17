import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import http_config from '../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../common/helper/axiosInterceptor';
import Ledger from '../hooks/Ledger'
import MuiTable from "../../table/view/index";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Link from '@mui/material/Link';
import { TablePagination } from '@mui/material';


export default function CustomerLedger() {

Ledger();


const data = useSelector(state => state.customerLedgSlice.data);

console.log(data)


const {handleChangeRowsPerPage, rowsPerPage, page, handleChangePage} = Ledger();

// const [ data, setData] = useState([]);

//  useEffect(() => axiosInstance.get(http_config.BASE_URL + "/api/customerLedger").then(res => setData(res.Ledger)), [])

// const headCells = [

//   {
//     numeric: false,
//     id: "customerName",
//     disablePadding: true,
//     label: "Customer Name",
//     minWidth: 170,
//   },
//   {
//     numeric: true,
//     id: "customerAddress",
//     disablePadding: false,
//     label: "Address",
//     minWidth: 170,
//   },
//   {
//     numeric: true,
//     id: "customerContact",
//     disablePadding: false,
//     label: "Contact No",
//     minWidth: 170,
//   },

//   {
//     numeric: true,
//     id: "customerBalance",
//     disablePadding: false,
//     label: "Customer Balance",
//     minWidth: 170,
//   },

//   {
//     numeric: true,
//     id: "status",
//     disablePadding: false,
//     label: "Status",
//     minWidth: 170,
//   },

  


// ];



// const num = [2,3,4,5,6]

  return (
  <React.Fragment>
{/* 
<MuiTable
headCells= {headCells}
rows={data}
num={num}
title="Customer Ledger"
/> */}

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Contact No</TableCell>
            <TableCell align="right">Customer Balanace</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
            <TableRow
            key = {data.id}
              
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell><Link href={"localhost:3000"}>{data.customerName}</Link></TableCell>
              <TableCell align="right">{data.customerAddress}</TableCell>
              <TableCell align="right">{data.customerContact}</TableCell>
              <TableCell align="right">{data.customerBalance}</TableCell>

              <TableCell align="right">{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TablePagination
    rowsPerPageOptions = {[5,10,15]}
    count = {data.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    component="div"
    />



  </React.Fragment>
  )
}
