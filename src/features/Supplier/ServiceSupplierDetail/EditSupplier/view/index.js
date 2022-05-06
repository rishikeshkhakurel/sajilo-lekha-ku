import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useEditSupplier from "../hooks/EditSupplier";

export default function EditServiceSupplier() {
  const { formvalue, handleSubmit, handleChange, errors, fetchData } =
    useEditSupplier();

  console.log(fetchData, "hello world");

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
              value={formvalue.serviceSupplierName}
             
            />

            <TextField
              sx={{ width: "45%" }}
              label="Address"
              name="address"
              value={formvalue.address}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Contact No"
              type="number"
              name="contact_No"
              value={formvalue.contact_No}

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
              value={formvalue.credit_Limit}

              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.credit_Limit)}
              helperText={errors.credit_Limit}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Status"
              name="status"
              value={formvalue.status}

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
              value={formvalue.remarks}

              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <TextField
              sx={{ width: "45%" }}
              label="Category"
              name="category"
              value={formvalue.category}

              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.category)}
              helperText={errors.category}
            />

           
          </Box>

          <Button
            sx={{ mt: 4, height: "50px" }}
            variant="contained"
            type="submit"
          >
            Update Service Supplier
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
