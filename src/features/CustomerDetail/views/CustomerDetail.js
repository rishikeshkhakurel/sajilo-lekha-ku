import { Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import Customer from "../hooks/customer";

const headCells = [
  {
    numeric: false,
    id: "CustomerName",
    disablePadding: true,
    label: "Customer Name",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Contact_No",
    disablePadding: false,
    label: "Contact Number",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Address",
    disablePadding: false,
    label: "Address",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Contractor_Name",
    disablePadding: false,
    label: "Contractor Name",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Contractor_ContactNo",
    disablePadding: false,
    label: "Contractor Number",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Credit_Limit",
    disablePadding: false,
    label: "Credit Limit",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Status",
    disablePadding: false,
    label: "Status",
    minWidth: 170,
  },
  {
    numeric: true,
    disablePadding: false,
    id: "Allow_Credit",
    label: "Credit Status",
    minWidth: 170,
  },
  {
    numeric: true,
    id: "Remarks",
    disablePadding: false,
    label: "Remark",
    minWidth: 170,
  },
];

const num = [2, 3, 4, 5, 6, 7, 8, 9]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

const CustomerDetail = () => {

Customer();

  const customerdata = useSelector((state) => state.customerSlice.data);
  const [rows, setRows] = useState(customerdata);

  const requestSearch = async (searchedVal) => {
    const filteredRows = await customerdata.filter((row) => {
      return ((row.CustomerName.toLowerCase().includes(searchedVal.toLowerCase())) || (row.Contact_No.toLowerCase().includes(searchedVal.toLowerCase())) );
    });
    setRows(filteredRows);
  };


  useEffect(()=>{
    setRows(customerdata)
  },[customerdata])

  const MemoTable = useMemo(
    () => (
      <Table
        id="customer"
        title="Customer Details"
        rows={rows}
        headCells={headCells}
        num={num}
        deleteurl='/api/deleteCustomer'
      />
    ),
    [rows]
  );
  return (
    <Box>
      
      <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          id="filled-search"
          label="Search"
          type="search"
          onChange={(e) => requestSearch(e.target.value)}
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

export default CustomerDetail;
