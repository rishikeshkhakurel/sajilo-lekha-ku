import {
  Box,
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";

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

function Customer() {
  return (
    <Box>
      <FormControl fullWidth>
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
      <Box>
        <Table
          title="Customer Details"
          rows={rows}
          headCells={headCells}
          num={num}
        />
      </Box>
    </Box>
  );
}

export default Customer;
