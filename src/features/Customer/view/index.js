import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import React, { useMemo } from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";
import useCustomer from "../hooks/useCustomer";

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
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Contact Number",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Address",
  },
];

const num = [1, 2]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

const Customer = () => {
  const {
    handleCustomerAdd,
    credit,
    setcredit,
    handleOnChange,
    formvalue,
    setformvalue,
  } = useCustomer();

  const MemoTable = useMemo(
    () => (
      <Table
        title="Customer Details"
        rows={rows}
        headCells={headCells}
        num={num}
      />
    ),
    []
  );
  return (
    <Box>
      <Paper sx={{ mt: 2, mb: 2 }}>
        <form onSubmit={handleCustomerAdd}>
          <Paper
            container="div"
            sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
          >
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Name"
              name="CustomerName"
              required
              onChange={handleOnChange}
            />
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Phone Number"
              name="Contact_No"
              required
              onChange={handleOnChange}
            />
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Address"
              name="Address"
              required
              onChange={handleOnChange}
            />
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Contractor_Name"
              name="CustomerName"
              required
              onChange={handleOnChange}
            />
          </Paper>
          <Paper
            container="div"
            sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
          >
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Contractor Number"
              name="Contractor_ContactNo"
              required
              onChange={handleOnChange}
            />
            <FormControlLabel
              sx={{ ml: 1, flex: 1 }}
              control={
                <Checkbox
                  defaultChecked
                  onChange={(e) => {
                    setcredit(e.target.checked);
                    if (!e.target.checked) {
                      console.log(e.target.checked);
                      setformvalue({ ...formvalue, Credit_Limit: "" });
                    }
                  }}
                />
              }
              label="Allow Credit"
            />
            {credit ? (
              <TextField
                sx={{ ml: 1, flex: 1 }}
                id="filled-name"
                label="Credit Limit"
                name="Credit_Limit"
                required
                onChange={handleOnChange}
              />
            ) : (
              <TextField
                sx={{ ml: 1, flex: 1 }}
                id="filled-name"
                label="Credit Limit"
                value={formvalue.Credit_Limit}
                disabled
              />
            )}
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="Remark"
              name="Remarks"
              required
              onChange={handleOnChange}
            />
          </Paper>
          <Paper container="div" sx={{ mt: 2, ml: 1 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Paper>
        </form>
      </Paper>
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
