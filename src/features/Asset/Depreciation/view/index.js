import { Button, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Asset from '../hooks/Asset';

export default function AddDepreciation() {


const {handleSubmit, handleChange, errors, } = Asset();

  return (
    <React.Fragment>

<form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

          <FormControl sx={{ width: "45%" }}>
              <InputLabel variant="standard">Category</InputLabel>
              <NativeSelect
                inputProps={{
                  name: "assetCategory",
                }}
                onChange={handleChange}
                required
              >
                <option value={"none"}> None</option>
                <option value={"AC-B"}>Building</option>
                <option value={"AC-FAF"}>Furniture and Fixtures</option>
                <option value={"AC-PAE"}>Plant and Equipment</option>
                <option value={"AC-V"}>Vehicle</option>
              </NativeSelect>
            </FormControl>
            
            <TextField
              sx={{ width: "45%" }}
              label="Transaction Detail"
              name="transactionDetail"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.transactionDetail)}
              helperText={errors.transactionDetail}
            />
           
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Transaction Date"
              type="date"
              name="transactionDate"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.transactionDate)}
              helperText={errors.transactionDate}
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
          
          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Asset In Value"
              type="number"
              name="assetInValue"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.assetInValue)}
              helperText={errors.assetInValue}
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
            <TextField
              sx={{ width: "45%" }}
              label="Asset Out Value"
              type="number"
              name="assetOutValue"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.assetOutValue)}
              helperText={errors.assetOutValue}
            />

<TextField
              sx={{ width: "45%" }}
              label="Depreciation Value"
              name="depreciationValue"
              type="number"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.depreciation)}
              helperText={errors.depreciation}
            />

            </Box>
         
          <Button
            sx={{ mt: 4, height: "50px" }}
            variant="contained"
            type="submit"
          >
           Sell Asset
          </Button>

          </Box>
</form>

    </React.Fragment>    
    
  )
}
