import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import GoodSupplier from '../hooks';

export default function AddGoodsSupplier() {


const{ handleSubmit, handleChange, errors} = GoodSupplier();

  return (
    <React.Fragment>
    
    <form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="GoodsSupplierName"
              name="goodsSupplierName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.goodsSupplierName)}
              helperText={errors.goodsSupplierName}
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
          <Button
            sx={{ mt: 4, height: "50px" }}
            variant="contained"
            type="submit"
          >
            Add Good Supplier
          </Button>

          </Box>
</form>

    </React.Fragment>
  )
}
