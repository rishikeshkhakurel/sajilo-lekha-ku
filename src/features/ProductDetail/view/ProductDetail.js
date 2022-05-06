import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Table from "../../table/view";
import { Product, Pagination } from "../hooks/Product";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  Product();

  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
    Pagination();

  const data = useSelector((state) => state.productSlice.data);

  console.log(data, "hello world");

  const unit = data.Unit;
  console.log(unit, "hi");

  const navigate = useNavigate();

  // const headCells = [
  //   {
  //     numeric: false,
  //     disablePadding: false,
  //     label: "Product Name",
  //     id: "productName",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Company Name",
  //     id: "companyName",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Size",
  //     id: "size",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Colour",
  //     id: "colour",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Expiry Date",
  //     id: "expireyDate",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Unit",
  //     id: "unit",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Equivalent SI Value",
  //     id: "equivalent_SI_Value",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Cost Price",
  //     id: "costPrice",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Selling Price",
  //     id: "sellingPrice",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: true,
  //     label: "Mimimum_Stock_Quantity",
  //     id: "minimum_Stock_Quantity",
  //   },
  //   {
  //     numeric: true,
  //     disablePadding: false,
  //     label: "Stock Quantity In SI Value",
  //     id: "stock_Quality_In_SI_Value",
  //   },
  // ];

  // const num = [2, 3, 4, 5, 6, 7, 8, 9,10,11];

  // return (
  //   <React.Fragment>
  //     <Table headCells={headCells} num={num} rows={data }  />
  //   </React.Fragment>
  // );

  // new table
  const style = {
    color: "white",
    fontWeight: "600",
  };

  return (
    <Box sx={{ m: 3, mt: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>Product Name</TableCell>
              <TableCell sx={style}>Company Name</TableCell>
              <TableCell sx={style}>Size</TableCell>
              <TableCell sx={style}>Color</TableCell>
              <TableCell sx={style}>Expirey Date</TableCell>
              <TableCell sx={style}>Unit</TableCell>
              <TableCell sx={style}>Equivalent_SI unit</TableCell>
              <TableCell sx={style}>Cost Price</TableCell>
              <TableCell sx={style}>Selling Price</TableCell>
              <TableCell sx={style}>Minimum Stock Quantity</TableCell>
              <TableCell sx={style}>Stock Quantity in SI value</TableCell>
              <TableCell sx={style}>Edit</TableCell>
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
                <TableCell>{data.ProductName}</TableCell>
                <TableCell>{data.CompanyName}</TableCell>
                <TableCell>{data.Size}</TableCell>
                <TableCell>{data.Colour}</TableCell>
                <TableCell>{data.ExpireyDate}</TableCell>
                <TableCell>
                  {data.Unit[0]} , {data.Unit[1]}, {data.Unit[2]}
                </TableCell>
                <TableCell>{data.Equivalent_SI_Value[0]}, {data.Equivalent_SI_Value[1]}, {data.Equivalent_SI_Value[2]}</TableCell>
                <TableCell>{data.CostPrice[0]}, {data.CostPrice[1]}, {data.CostPrice[2]}</TableCell>
                <TableCell>{data.SellingPrice[0]}, {data.SellingPrice[1]}, {data.SellingPrice[2]}</TableCell>
                <TableCell align="center">
                  {data.Minimum_Stock_Quantity}
                </TableCell>
                <TableCell align="center">
                  {data.Stock_Quality_In_SI_Value}
                </TableCell>

                <TableCell>
                  
                  <Link to="/updateProduct"
                  state = {data?._id}
                  >
                    
                    <EditIcon sx={{ cursor: "pointer" }} />
                  </Link>
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
  );
}
