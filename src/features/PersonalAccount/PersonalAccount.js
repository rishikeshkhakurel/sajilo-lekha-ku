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

export default function PersonalAccount() {

 

  
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

 <PersonalTable receipt={receipt}/>

</React.Fragment>


  ) 
}
