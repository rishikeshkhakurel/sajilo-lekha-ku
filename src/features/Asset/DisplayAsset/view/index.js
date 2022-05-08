import React, { useEffect, useState } from "react";
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

import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import { PageSelect, Asset } from "../hooks/DisplayAsset";

export default function DisplayAsset() {

   const {data} = Asset();

   const fetchData = data?.assets;


   console.log(fetchData)
   

  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
    PageSelect();

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
              mb: "0.5px",
              pl: 2,
              alignItems: "center",
            }}
          >
            Asset Detail
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>Transaction Date</TableCell>
                <TableCell sx={style}>Asset Category</TableCell>
                
                <TableCell sx={style}>Asset In Value</TableCell>
                <TableCell sx={style}>Asset Out Value</TableCell>
               
                <TableCell sx={style}>Transaction Detail</TableCell>
                <TableCell sx={style}>Transaction Method</TableCell>
               
            </TableRow>

            </TableHead>
            <TableBody>
              {fetchData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((data) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: "#ede7f6",
                    }}
                  >
                    <TableCell>{data?.TransactionDate}</TableCell>
                    <TableCell>{data?.AssetCategory}</TableCell>
                    <TableCell>{data?.AssetInValue}</TableCell>

                    <TableCell>{data.AssetOutValue}</TableCell>

                    <TableCell>{data.TransactionDetail}</TableCell>

                    <TableCell>{data.TransactionMethod}</TableCell>


                    <TableCell>{data.Remarks}</TableCell>

                   
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
