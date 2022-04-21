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
import { TablePagination } from '@mui/material';
import PersonalAccount from '../../PersonalAccount/PersonalAccount';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';



export default function CustomerLedger() {

Ledger();



const [popValue, setPopValue] = useState(false);


const data = useSelector(state => state.customerLedgSlice.data);

console.log(data)


const {handleChangeRowsPerPage, rowsPerPage, page,handleChangePage,} = Ledger();

const style = {
  color:"white",
  fontWeight:"600"
}


  return (
  <React.Fragment>



<Box sx={{m:3, mt:10}}>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{backgroundColor:"#2196f3"}}>
            <TableCell sx={style} >Customer Name</TableCell>
            <TableCell sx={style}>Address</TableCell>
            <TableCell sx={style}>Contact No</TableCell>
            <TableCell sx={style}>Customer Balanace</TableCell>
            <TableCell sx={style}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
            <TableRow
            key = {data.id}
            
              
           sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor:"#ede7f6" }}
            >
             
              <TableCell><Link to ={`/personalAccount`} state={data.customerId}>{data.customerName}</Link></TableCell>
              <TableCell >{data.customerAddress}</TableCell>
              <TableCell >{data.customerContact}</TableCell>
              <TableCell >{data.customerBalance}</TableCell>

              <TableCell >{data.status}</TableCell>
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
  


</Box>


  </React.Fragment>
  )
}
