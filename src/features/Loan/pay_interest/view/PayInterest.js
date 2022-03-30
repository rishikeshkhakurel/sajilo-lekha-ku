import React from "react";
import { Box, TextField, Button } from "@mui/material";
import Interest from "../hooks/Interest.js";
export default function PayInterest() {

const {onSubmit, handleChange, errors } = Interest();

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
        name="interestAmount"
        label="Interest Amount"
        type="number"
        InputLabelProps = {{shrink: true}}
        required
        onChange={handleChange}
        error={Boolean(errors.interestAmount)}
        helperText={errors.interestAmount}

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
        Pay Interest
      </Button>
     </Box>
     </form>

      </Box>
    </React.Fragment>
  );
}
