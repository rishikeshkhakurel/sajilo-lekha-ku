import React, { useMemo } from "react";
import Tables from "../table/view/index.js";
import { Box } from "@mui/material";

function createData(sn, name, phone_number, address) {
  return {
    sn,
    name,
    phone_number,
    address,
  };
}

const rows = [
  createData(1,"Ram", 9843123456, "kathmandu"),
  createData(2,"Sham", 9843123456, "kathmandu"),
  createData(3,"Sita", 9843123456, "kathmandu"),
  createData(4,"Hari", 9843123456, "kathmandu"),
  createData(5,"Gita", 9843123456, "kathmandu"),
];

const headCells = [
  {
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    numeric: true,
    disablePadding: true,
    label: "Contact Number",
  },
  {
    numeric: true,
    disablePadding: true,
    label: "Address",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Edit",
  },
];

const num = [2,3];
export default function InvoiceTable() {
  
  const memo = (
    <Tables
      headCells={headCells}
      num={num}
      rows={rows}
      title="customer table"
    />
  );

  return (
    <React.Fragment>
      <Box>{memo}</Box>
    </React.Fragment>
  );
}
