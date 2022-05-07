import { DataArray } from '@mui/icons-material';
import { Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import http_config from '../../common/config/httpconfig/http_config';
import axiosInstance from '../../common/helper/axiosInterceptor';
import Personal from './hooks/personalAccount';
import PersonalTable from "./table/PersonalTable";

export default function StaffPersonalAccount() {

 

  
const {fetchData} = Personal();

console.log(fetchData, "mrbeen")


// fetched customerData from backend

const customerData = fetchData.customerDetails;


// fetched receipts data from backend



const receipt= fetchData.receipts;

// console.log(customerData, "formvalue")

console.log(receipt, "data")





// const arrayData = receipt.map((data)=>{
//   console.log(data,"arrya");
// })




  return (

<React.Fragment>

 <Box sx={{m:"20px", p:3}}>


 
<Paper sx={{ display:"flex",width:"100%"}} elevation = {0}>

<Box >
 <Typography sx={{fontWeight:"bold"}}>
  
  Name : {customerData?.CustomerName}
   
 </Typography >

 

 <Typography sx={{mt:2, fontWeight:"bold"}}>

Address : {customerData?.Address}

 </Typography>

 <Typography sx={{mt:2, fontWeight:"bold"}}>

  Contact No : {customerData?.Contact_No}

 </Typography>

 <Typography sx={{mt:2, fontWeight:"bold"}}>

  Status : {customerData?.Status}

 </Typography>

</Box>




</Paper>
  


 </Box>

 <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}  >
              <TableCell  sx={style}>SN</TableCell>

              <TableCell  sx={style}>Transaction Date</TableCell>
              <TableCell  sx={style}>Transaction Detail</TableCell>
              <TableCell  sx={style}>Credit</TableCell>
              <TableCell  sx={style}>Debit</TableCell>
              <TableCell  sx={style}>Status</TableCell>
              <TableCell  sx={style}>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((data) => (
              <TableRow
              onClick={() =>{

                navigate('/bill/${data.id}')
               }}
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, backgroundColor:"#ede7f6" }}
              >
                <TableCell>{data?.sn}</TableCell>

                <TableCell>{data?.transactionDate}</TableCell>
                <TableCell>{data?.transactionDetail}</TableCell>
                <TableCell>{data?.credit}</TableCell>
                <TableCell>{data?.debit}</TableCell>
                <TableCell>{data?.status}</TableCell>

                <TableCell>{data?.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        count={datas?.length}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />



</React.Fragment>


  ) 
}
