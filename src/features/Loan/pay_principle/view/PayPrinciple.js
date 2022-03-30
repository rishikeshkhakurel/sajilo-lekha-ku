import React from 'react'
import {Box, TextField, Button} from "@mui/material";
import Principle from "../hooks/Principle.js";
export default function PayPrinciple() {


const {handleChange, onSubmit, errors} = Principle();

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
  name="principleAmount"
  label="Principle Amount"
  type="number"
  InputLabelProps = {{shrink: true}}
  required
  onChange={handleChange}
  error={Boolean(errors.principleAmount)}
  helperText={errors.principleAmount}

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
  Pay Principle
</Button>
</Box>
</form>

</Box>
        
         </React.Fragment>
  )
}
