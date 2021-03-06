import { Button, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Supplier from '../hooks/Supplier';

export default function ServiceSupplier() {


const {handleSubmit, handleChange, errors, } = Supplier();

  return (
    <React.Fragment>

<form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Servie Supplier Name"
              name="serviceSupplierName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.serviceSupplierName)}
              helperText={errors.serviceSupplierName}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Address"
              name="address"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Contact No"
              type="number"
              name="contact_No"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.contact_No)}
              helperText={errors.contact_No}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Credit Limit"
              name="credit_Limit"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.credit_Limit)}
              helperText={errors.credit_Limit}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>

          <TextField
              sx={{ width: "45%" }}
              label="Status"
              name="status"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.status)}
              helperText={errors.status}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Remarks"
              name="remarks"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
            />

           
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>

          <FormControl sx={{ width: "45%" }}>
              <InputLabel variant="standard">Category</InputLabel>
              <NativeSelect
                inputProps={{
                  name: "category",
                }}
                onChange={handleChange}
                required
              >
                <option value={"none"}> None</option>
                <option value={"AC-GAAE"}>General and Administrative</option>
                <option value={"TM22"}>By cash</option>
              </NativeSelect>
            </FormControl>
  

 
</Box>

          <Button
            sx={{ mt: 4, height: "50px" }}
            variant="contained"
            type="submit"
          >
            Add Service Supplier
          </Button>

          </Box>
</form>

    </React.Fragment>    
    
  )
}
