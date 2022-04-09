import React from "react";
import { Box, TextField, Button, FormControl, InputLabel, NativeSelect } from "@mui/material";
import Loan from "../hooks/index";
export default function AddLoan() {

const {onSubmit, handleChange, errors } = Loan();

  return (
    <React.Fragment>
      <Box sx={{ m: 3 }}>


      <form onSubmit={onSubmit}>
      
  
  
<Box sx ={{display:"flex", justifyContent:"space-between"}}>
          <TextField
          sx={{width:"45%", }}
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
        sx={{width:"45%"}}

        name="loanAmount"
        label="Loan Amount"
        type="number"
        InputLabelProps = {{shrink: true}}
        required
        onChange={handleChange}
        error={Boolean(errors.loanAmount)}
        helperText={errors.loanAmount}

        />

        </Box>

        <Box sx={{mt:4,display:"flex", justifyContent: "space-between"}}>

        <FormControl sx={{ width: "45%" }}>
              <InputLabel variant="standard" >
                Transaction Method
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "transactionMethod",
                }}
                onChange={handleChange}
                required
              >
                <option value = {"none"}> None</option>
                <option value={"TM11"}>By cheque</option>
                <option value={"TM22"}>By cash</option>
              </NativeSelect>
            </FormControl>
        
        
    
     
     <TextField sx={{width:"45%"}}
      label="Transaction Details"
      name="transactionDetail"
      InputLabelProps = {{shrink: true}}
          required
          onChange={handleChange}
          error={Boolean(errors.transactionDetail)}
          helperText={errors.transactionDetail}

     />

     </Box>

      <Button sx={{mt:4, height:"50px"}} variant="contained" type="submit">
        Add Loan
      </Button>
     </form>

      </Box>
    </React.Fragment>
  );
}
