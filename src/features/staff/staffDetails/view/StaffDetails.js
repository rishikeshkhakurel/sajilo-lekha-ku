import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useStaffDetails, PageSelect } from "../hooks/useStaffDetails.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function StaffDetails() {
  const {deleteHandler}=useStaffDetails();
  const data = useSelector((state) => state.staffSlice.data);
  console.log(data);

  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
    PageSelect();

  // const headCells = [
  //   {
  //     numeric: false,
  //     disablePadding: false,
  //     label: "Staff Name",
  //     id: "StaffName",
  //   },

  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     id: "Address",
  //     label: "Address",
  //   },

  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Contact Number",
  //     id: "Contact_No",
  //   },

  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Status",
  //     id: "Status",
  //   },

  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Edit",
  //     id: "Edit",
  //   },
  // ];

  // const num = [2, 3, 4, 5];

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
          Staff Detail
        </Typography>
      </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#2196f3" }}>
                <TableCell sx={style}>Staff Name</TableCell>
                <TableCell sx={style}>Address</TableCell>
                <TableCell sx={style}>Contact No</TableCell>
                <TableCell sx={style}>Status</TableCell>
                <TableCell sx={style}>Remarks</TableCell>

                <TableCell sx={style}>Edit</TableCell>
                <TableCell sx={style}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((data) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: "#ede7f6",
                    }}
                  >
                    <TableCell>{data.StaffName}</TableCell>
                    <TableCell>{data.Address}</TableCell>
                    <TableCell>{data.Contact_No}</TableCell>

                    <TableCell>{data.Status}</TableCell>

                    <TableCell>{data.Remarks}</TableCell>

                    <TableCell>
                      <Link to="/updateStaff" state={data._id}>
                        <EditIcon sx={{ cursor: "pointer" }} />
                      </Link>
                    </TableCell>
                    <TableCell>
                      <DeleteIcon 
                      onClick={()=>deleteHandler(data._id)}
                      sx={{ cursor: "pointer" }} />
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
        />
      </Box>
    </React.Fragment>
  );
}
