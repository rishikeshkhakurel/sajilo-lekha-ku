import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Loan from "../hooks/index";
export default function AddLoan() {

const {onSubmit, handleChange, errors } = Loan();

  return (
    <React.Fragment>
      <Box sx={{ m: 3 }}>


      <form onSubmit={onSubmit}>
        <Box sx={{display: 'flex', justifyContent:"space-between"}}>
  
  

          <TextField
          fullWidth
          sx={{ml:1}}
            type="date"
            name="transactionDate"
            label="Transaction Date"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleChange}
            error={Boolean(errors.transactionDate)}
            helperText={errors.transactionDate}
          />

<TextField 
        sx={{ml:1}}
        fullWidth
        name="loanAmount"
        label="Loan Amount"
        type="number"
        InputLabelProps = {{shrink: true}}
        required
        onChange={handleChange}
        error={Boolean(errors.loanAmount)}
        helperText={errors.loanAmount}

        />

          <TextField
          fullWidth
          sx={{ml:1}}
          name="transactionMethod"
          label="Transaction Method"
          InputLabelProps = {{shrink: true}}
          required
          onChange={handleChange}
          error={Boolean(errors.transactionMethod)}
          helperText = {errors.transactionMethod}
          />
        </Box>
      
      

      <Box sx = {{mt:3}}>
     
     <TextField sx={{width:"60%"}}
      label="Transaction Details"
      name="transactionDetail"
      InputLabelProps = {{shrink: true}}
          required
          onChange={handleChange}
          error={Boolean(errors.transactionDetail)}
          helperText={errors.transactionDetail}

     />

      <Button sx={{ml:3, height:"50px"}} variant="contained" type="submit">
        Add Loan
      </Button>
     </Box>
     </form>

      </Box>
    </React.Fragment>
  );
}
