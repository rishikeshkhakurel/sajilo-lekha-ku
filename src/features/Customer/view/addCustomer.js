import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import useCustomer from "../hooks/useCustomer";

function AddCustomer() {
  const {
    handleCustomerAdd,
    credit,
    setcredit,
    handleOnChange,
    formvalue,
    setformvalue,
  } = useCustomer();
  return (
    <Paper sx={{ mt: 2, mb: 2 }} >
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
            name="Contractor_Name"
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
  );
}

export default AddCustomer;
