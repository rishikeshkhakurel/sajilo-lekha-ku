import {
  Button,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useProduct from "../hooks/useProduct";

function AddProduct() {
  const {
    handleProductAdd,
    handleProductEdit,
    handleOnChange,
    formvalue,
    setformvalue,
  } = useProduct();

  // const editdata = useSelector((state) => state.editSlice.data);
  // useEffect(() => {
  //   if (editdata.id === "product") {
  //     console.log(editdata);
  //     setformvalue(editdata.data);
  //   }
  // }, [editdata, setformvalue]);
  return (
    <Paper sx={{ mt: 2, mb: 2 }}>
      {/* <form onSubmit={!editdata.id==='product'? handleProductAdd : handleProductEdit}> */}
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
            value={formvalue.CustomerName}
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Phone Number"
            name="Contact_No"
            value={formvalue.Contact_No}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Address"
            name="Address"
            value={formvalue.Address}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Contractor_Name"
            name="Contractor_Name"
            value={formvalue.Contractor_Name}
            InputLabelProps={{ shrink: true }}
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
            value={formvalue.Contractor_ContactNo}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
          
          <TextField
            sx={{ ml: 1, flex: 1 }}
            id="filled-name"
            label="Remark"
            name="Remarks"
            value={formvalue.Remarks}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
        </Paper>
        <Paper container="div" sx={{ mt: 2, ml: 1 }}>
          <Button type="submit" variant="contained">
            {/* {editdata.id === "product" ? "Update" : "Submit"} */}
          </Button>
        </Paper>
      {/* </form> */}
    </Paper>
  );
}

export default AddProduct;
