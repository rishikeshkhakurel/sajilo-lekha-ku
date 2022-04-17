import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Table from "../../table/view";
import Product from "../hooks/Product";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ProductDetail() {
  Product();

  const data = useSelector((state) =>state.productSlice.data);


  console.log(data, "hello world");

  const unit = data.Unit;
  console.log(unit, "hi");

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Expirey Date</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Equivalent_SI unit</TableCell>
            <TableCell align="right">Cost Price</TableCell>
            <TableCell align="right">Selling Price</TableCell>
            <TableCell align="right">Minimum Stock Quantity</TableCell>
            <TableCell align="right">Stock Quantity in SI value</TableCell>







          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
               <TableCell align="right">{data.ProductName}</TableCell>
              <TableCell align="right">{data.CompanyName}</TableCell>
              <TableCell align="right">{data.Size}</TableCell>
              <TableCell align="right">{data.Colour}</TableCell>
              <TableCell align="right">{data.ExpireyDate}</TableCell>
             <TableCell align = "right">{data.Unit}</TableCell>
            </TableRow>
            
            
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );


  
}
