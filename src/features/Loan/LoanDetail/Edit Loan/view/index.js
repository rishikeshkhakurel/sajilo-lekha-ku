import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import EditLoan from "../hooks/EditLoan";
export default function LoanEdit() {
  const { onSubmit, handleChange, errors, formvalue } = EditLoan();

  const date= formvalue.transactionDate.split("T")

  return (
    <React.Fragment>
      <Box sx={{ m: 3 }}>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              type="date"
              name="transactionDate"
              value={date[0]}
              label="Transaction Date"
              InputLabelProps={{ shrink: true }}
              required
              onChange={handleChange}
              error={Boolean(errors.transactionDate)}
              helperText={errors.transactionDate}
            />

            <TextField
              sx={{ width: "45%" }}
              name="loanAmount"
              label="Loan Amount"
              type="number"
              InputLabelProps={{ shrink: true }}
              value={formvalue.loanAmount}
              required
              onChange={handleChange}
              error={Boolean(errors.loanAmount)}
              helperText={errors.loanAmount}
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ width: "45%" }}>
              <InputLabel variant="standard">Transaction Method</InputLabel>
              <NativeSelect
                inputProps={{
                  name: "transactionMethod",
                }}
                onChange={handleChange}
                required
              >
               
                <option value={"TM11"}>By cheque</option>
                <option value={"TM22"}>By cash</option>
              </NativeSelect>
            </FormControl>

            <TextField
              sx={{ width: "45%" }}
              label="Transaction Details"
              name="transactionDetail"
              InputLabelProps={{ shrink: true }}
              required
              value={formvalue.transactionDetail}
              onChange={handleChange}
              error={Boolean(errors.transactionDetail)}
              helperText={errors.transactionDetail}
            />
          </Box>


          <Box sx={{mt:4, display:"flex"}}>

          <TextField
              sx={{ width: "45%" }}
              label="Remarks"
              name="remarks"
              value={formvalue.remarks}
              InputLabelProps={{ shrink: true }}
              required
              onChange={handleChange}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
            />

          </Box>

          <Button
            sx={{ mt: 4, height: "50px" }}
            variant="contained"
            type="submit"
          >
            Update Loan
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
}
