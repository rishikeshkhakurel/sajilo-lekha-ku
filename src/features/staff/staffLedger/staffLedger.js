import React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {PageSelect,StaffLedgerHook }from "./hooks/index";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

export default function StaffLedger() {

  StaffLedgerHook();



  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
  PageSelect();

  const data = useSelector((state) => state.staffLedgerSlice.data);

  console.log(data, "formvalue");


  

  

  const style = {
    color: "white",
    fontWeight: "600",
  };

  return (
    <React.Fragment>


      

<Box sx={{ m: 3, mt: 4 }}>

<Box>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: "#2196f3",
            height: "60px",
            color: "white",
            display: "flex",
            mb:"0.5px",
            pl:2,
            alignItems: "center",
          }}
        >
          Staff Ledger
        </Typography>

        </Box>
      {/* 

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>Service Supplier Name</TableCell>
              <TableCell sx={style}>Address</TableCell>
              <TableCell sx={style}>Contact No</TableCell>
              <TableCell sx={style}>Credit Limit</TableCell>
              <TableCell sx={style}>Status</TableCell>
              <TableCell sx={style}>Category</TableCell>
              <TableCell sx={style}>Sub Category</TableCell>
              <TableCell sx={style}>Remarks</TableCell>
              <TableCell sx={style}>Edit</TableCell>
              <TableCell sx={style}>Delete</TableCell>


              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#ede7f6",
                }}
              >
                <TableCell>{data.ServiceSupplierName}</TableCell>
                <TableCell>{data.Address}</TableCell>
                <TableCell>{data.Contact_No}</TableCell>
                <TableCell>{data.Credit_Limit}</TableCell>
                <TableCell>{data.Status}</TableCell>
                <TableCell>
                  {data.Category}
                </TableCell>
                <TableCell>{data.Sub_Category}</TableCell>
                <TableCell>{data.Remarks}</TableCell>
              

                <TableCell>
                  
                  <Link to="/updateServiceSupplier" state={data._id}>
                    
                    <EditIcon sx={{ cursor: "pointer" }} />
                  </Link>
                </TableCell>
             <TableCell> 
               <DeleteIcon sx={{cursor:"pointer"}} />
               
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        count={data?.length}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Box>
      
    </React.Fragment>
  );
}
