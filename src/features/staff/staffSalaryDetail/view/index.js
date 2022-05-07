import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Pagination, StaffSalary } from "../hooks/staffSalaryDetail";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StaffSalaryDetail() {
 

  const {data} =  StaffSalary();

  const { rowsPerPage, page,handleChangeRowsPerPage, handleChangePage } =
    Pagination();

  

  
  const style = {
    color: "white",
    fontWeight: "600",
  };

  return (
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
         Staff Salary Detail
        </Typography>
      </Box>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>Product Name</TableCell>
              <TableCell sx={style}>Company Name</TableCell>
              <TableCell sx={style}>Size</TableCell>
              <TableCell sx={style}>Color</TableCell>
              <TableCell sx={style}>Expirey Date</TableCell>
             
              <TableCell sx={style}>Edit</TableCell>
              <TableCell sx={style}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((data) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#ede7f6",
                }}
              >
                <TableCell>asdfdf</TableCell>
                <TableCell>asdfdsf</TableCell>
                <TableCell>adfadsf</TableCell>
                <TableCell>{asdf</TableCell>
                <TableCell>{data?.ExpireyDate}</TableCell>
               
              
                <TableCell align="center">
                  {data.Stock_Quality_In_SI_Value}
                </TableCell>

                <TableCell>
                  <Link to="/updateProduct" state={data?._id}>
                    <EditIcon sx={{ cursor: "pointer" }} />
                  </Link>
                </TableCell>
                <TableCell>
                  <DeleteIcon sx={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Box>
  );
}
