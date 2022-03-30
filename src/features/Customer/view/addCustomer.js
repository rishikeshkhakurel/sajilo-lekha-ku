import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useCustomer from "../hooks/useCustomer";
import Validate from "../hooks/validate.js";

function AddCustomer() {
  const {
    handleCustomerAdd,
    handleCustomerEdit,
    credit,
    setcredit,
    handleOnChange,
    formvalue,
    setformvalue,
    errors,
  

  } = useCustomer();



  const editdata = useSelector((state) => state.editSlice.data);
  useEffect(() => {
    if (editdata.id === "customer") {
      console.log(editdata);
      setformvalue(editdata.data);
    }
  }, [editdata, setformvalue]);
  return (
    <Paper sx={{ mt: 2, mb: 2 }}>
      <form onSubmit={editdata.id==='customer'? handleCustomerAdd : handleCustomerEdit }>
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
            error={Boolean(errors.CutomerName)}
            helperText={errors.CutomerName}
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
            error={Boolean(errors.Contact_No)}
            helperText={errors.Contact_No}

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
            error={Boolean(errors.Address)}
            helperText={errors.Address}

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
            error={Boolean(errors.Contractor_Name)}
            helperText={errors.Contractor_ContactNo}

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
            error={Boolean(errors.Contractor_No)}

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
              value={formvalue.Credit_Limit}
              InputLabelProps={{ shrink: true }}
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
            value={formvalue.Remarks}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
          />
        </Paper>
        <Paper container="div" sx={{ mt: 2, ml: 1 }}>
          <Button type="submit" variant="contained" >
            {editdata.id === "customer" ? "Update" : "Submit" }
           
          </Button>
        </Paper>
      </form>
    </Paper>
  );
}

export default AddCustomer;
