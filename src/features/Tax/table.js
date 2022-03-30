import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddTax from "@mui/material/Paper";


export default function Tables() {
 
  
  return (
<React.Fragment>

<TableContainer sx={{display:'flex', justifyContent:'center', mt:4}} component={Paper} >
      <Table sx={{width:"100%"} }aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>SN</TableCell>
          <TableCell >Date</TableCell>
          <TableCell >Transaction Details</TableCell>
          <TableCell >Credit</TableCell>
          <TableCell>Debit</TableCell>
          <TableCell>Cr/Db</TableCell>
          <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
         <TableRow>
             <TableCell>1</TableCell>
             <TableCell></TableCell>
             <TableCell>To pay tax</TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
         </TableRow>

         <TableRow>
             <TableCell>2</TableCell>
             <TableCell></TableCell>
             <TableCell>Tax Paid</TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
         </TableRow>
        </TableBody>
       
      </Table>
    </TableContainer>



</React.Fragment>
    )
}
