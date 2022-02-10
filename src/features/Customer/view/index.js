import { Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useMemo } from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import AddCustomer from "./addCustomer";

function createData(name, phone_number, address) {
  return {
    name,
    phone_number,
    address,
  };
}

const rows = [
  createData("Ram", 9843123456, "kathmandu"),
  createData("Sham", 9843123456, "kathmandu"),
  createData("Sita", 9843123456, "kathmandu"),
  createData("Hari", 9843123456, "kathmandu"),
  createData("Gita", 9843123456, "kathmandu"),
];

const headCells = [
  {
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
    minWidth: 170,
    
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Contact Number",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Address",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Contractor Name",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Contractor Number",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Credit Limit",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Status",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Credit Status",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Remark",
    minWidth: 170,
  },
];

const num = [ 2, 3, 4, 5, 6, 7, 8, 9]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

const Customer = () => {
  const customerdata = useSelector((state) => state.customerSlice.data);
  console.log("customer slice", customerdata);
  console.log("customer data", rows);

  const MemoTable = useMemo(
    () => (
      <Table
        title="Customer Details"
        rows={customerdata}
        headCells={headCells}
        num={num}
      />
    ),
    [customerdata]
  );
  return (
    <Box>
      <AddCustomer />
      <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          id="filled-search"
          label="Search"
          type="search"
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </FormControl>
      <Box>{MemoTable}</Box>
    </Box>
  );
};

export default Customer;
