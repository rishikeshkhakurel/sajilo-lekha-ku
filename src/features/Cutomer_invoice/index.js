import React, {useMemo} from 'react'
import Tables from "../table/view/index.js";
import {Box} from "@mui/material";
export default function InvoiceTable() {

    const headCells=[
     {
        numeric: true,
        id: "SN",
        disablePadding: true,
        label: "Customer Name",
        minWidth: 170,   
     },
     {
        numeric: false,
        id: "Description",
        disablePadding: true,
        label: "Description",
        minWidth: 170,   
     },
     {
        numeric: false,
        id: "quality",
        disablePadding: true,
        label: "Quality",
        minWidth: 170,   
     },
     {
        numeric: false,
        id: "unit",
        disablePadding: true,
        label: "Unit",
        minWidth: 170,   
     },
     {
        numeric: true,
        id: "size",
        disablePadding: true,
        label: "Size",
        minWidth: 170,   
     },
     {
        numeric: true,
        id: "rate",
        disablePadding: true,
        label: "Rate",
        minWidth: 170,   
     },
     {
        numeric: true,
        id: "unit",
        disablePadding: true,
        label: "QTY",
        minWidth: 170,   
     },
     {
        numeric: true,
        id: "subtotal",
        disablePadding: true,
        label: "SUBTOTAL",
        minWidth: 170,   
     },
     
    ]

    const num =[2,3,4,5,6,7,8];
    
   

  return (
    <React.Fragment>

<Box></Box>
    </React.Fragment>
  );
}
