import { Box, FormControl, IconButton, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Table from "../../table/view/index";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import AddProduct from "./addProduct";

function createData(SN,name, phone_number, address) {
  return {
    SN,
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
    disablePadding: false,
    label: "Contact Number",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Address",
  },
];

const num = [1,2,]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

const Product = () => {
  // const productdata = useSelector((state) => state.productSlice.data);
  // const [rows, setRows] = useState(productdata);

  // const requestSearch = async (searchedVal) => {
  //   const filteredRows = await productdata.filter((row) => {
  //     return ((row.CustomerName.toLowerCase().includes(searchedVal.toLowerCase())) || (row.Contact_No.toLowerCase().includes(searchedVal.toLowerCase())) );
  //   });
  //   setRows(filteredRows);
  // };


  // useEffect(()=>{
  //   setRows(productdata)
  // },[productdata])

  const MemoTable = useMemo(
    () => (
      <Table
        id="product"
        title="Product Details"
        rows={rows}
        headCells={headCells}
        num={num}
        deleteurl='/api/deleteProduct'
      />
    ),
    []
  );
  return (
    <Box>
      <AddProduct />
      <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          id="filled-search"
          label="Search"
          type="search"
          // onChange={(e) => requestSearch(e.target.value)}
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

export default Product;
