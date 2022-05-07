import React from "react";
import { Box, TextField, Button, InputLabel, FormControl, NativeSelect } from "@mui/material";
import InterestUpdate from "../hooks/UpdateInterest";
export default function UpdateInterest() {

const {onSubmit, handleChange, errors, formvalue } = InterestUpdate();

const date = formvalue.transactionDate.split("T");


  return (
    <React.Fragment>
      <Box sx={{ m: 3 }}>

        

      <form onSubmit={onSubmit}>

       <Box sx={{display:"flex", justifyContent:"space-between"}}>  
  

          <TextField
          sx={{width:"45%"}}
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
        sx={{width:"45%"}}
        fullWidth
        name="interestAmount"
        label="Interest Amount"
        value={formvalue.interestAmount}
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
          value={formvalue.transactionDetail}
          error={Boolean(errors.transactionDetail)}
          helperText={errors.transactionDetail}

     />
     </Box>

     <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>  
  

  <TextField
  sx={{width:"45%"}}
    name="remarks"
    label="Remarks"
    value={formvalue.remarks}
    InputLabelProps={{ shrink: true }}
    required
    onChange={handleChange}
    error={Boolean(errors.remarks)}
    helperText={errors.remarks}
  />
  </Box>

      <Button sx={{mt:4, height:"50px"}} variant="contained" type="submit">
        Update Interest
      </Button>
     
     </form>

      </Box>
    </React.Fragment>
  );
}
