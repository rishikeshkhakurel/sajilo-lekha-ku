import React from "react";
import { Box, TextField, Button, InputLabel, FormControl, NativeSelect } from "@mui/material";
import Interest from "../hooks/Interest.js";
export default function PayInterest() {

const {onSubmit, handleChange, errors } = Interest();

  return (
    <React.Fragment>
      <Box sx={{ m: 3 }}>


      <form onSubmit={onSubmit}>

       <Box sx={{display:"flex", justifyContent:"space-between"}}>  
  

          <TextField
          sx={{width:"45%"}}
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
        fullWidth
        name="interestAmount"
        label="Interest Amount"
        type="number"
        InputLabelProps = {{shrink: true}}
        required
        onChange={handleChange}
        error={Boolean(errors.interestAmount)}
        helperText={errors.interestAmount}

        />
       </Box>

       <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>
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

     <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>  
  

  <TextField
  sx={{width:"45%"}}
    name="remarks"
    label="Remarks"
    InputLabelProps={{ shrink: true }}
    required
    onChange={handleChange}
    error={Boolean(errors.remarks)}
    helperText={errors.remarks}
  />
  </Box>

      <Button sx={{mt:4, height:"50px"}} variant="contained" type="submit">
        Pay Interest
      </Button>
     
     </form>

      </Box>
    </React.Fragment>
  );
}
