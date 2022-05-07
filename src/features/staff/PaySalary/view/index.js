import React from "react";
import { Box, TextField, Button, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Salary from "../hooks/PaySalary";


export default function PaySalary() {
  const { handleSubmit, handleChange, errors } = Salary();

  return (
    <React.Fragment>
      <Box sx={{ m: 3, p: 3 }}>
        <form onSubmit={handleSubmit}>
         
         <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <TextField
              sx={{ width:"45%" }}
              label="Staff Name"
              name="staffName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.staffName)}
              helperText={errors.staffName}
            />

            <TextField
              sx={{ width:"45%" }}
              label="Transaction Date"
              name="transactionDate"
              type="date"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.transactionDate)}
              helperText={errors.transactionDate}
            />

            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>

            <TextField
              sx={{ width:"45%" }}
              onChange={handleChange}
              label="Transaction Detail"
              name="transactionDetail"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.transactionDetail)}
              helperText={errors.transactionDetail}
            />

<TextField
              sx={{ width:"45%" }}
              onChange={handleChange}
              label="Salary Amount"
              name="salaryAmount"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.salaryAmount)}
              helperText={errors.salaryAmount}
            />

        
            

            </Box>
          

          <Box sx={{ display: "flex", mt:4,justifyContent:"space-between" }}>
            <TextField
              sx={{  width: "45%" }}
              label="Remarks"
              name="remarks"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
              onChange={handleChange}
            />

<TextField
              sx={{ width:"45%" }}
              onChange={handleChange}
              label="Staff Address"
              name="staffAddress"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.staffAddress)}
              helperText={errors.staffAddress}
            />

           </Box>

           <Box sx={{ display: "flex", mt:4,justifyContent:"space-between" }}>
            <TextField
              sx={{  width: "45%" }}
              label="Contact No"
              name="staffContact_No"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.staffContact_No)}
              helperText={errors.staffContact_No}
              onChange={handleChange}
            />

<FormControl sx={{ width: "45%" }}>
              <InputLabel variant="standard">Transaction Method</InputLabel>
              <NativeSelect
                inputProps={{
                  name: "transactionMethod",
                }}
                onChange={handleChange}
                required
              >
                <option value={"none"}> None</option>
                <option value={"TM11"}>By cheque</option>
                <option value={"TM22"}>By cash</option>
              </NativeSelect>
            </FormControl>

            </Box>

            <Button
              sx={{ height: "50px", mt:4 }}
              type="submit"
              variant="contained"
            >
              Pay Salary
            </Button>
          
        </form>
      </Box>
    </React.Fragment>
  );
}
