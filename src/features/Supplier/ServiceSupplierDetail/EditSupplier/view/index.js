import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import EditSupplier from "../hooks/EditSupplier";

export default function EditServiceSupplier() {
  const { handleSubmit, handleChange, errors, fetchData, formvalue } = EditSupplier();

  console.log(fetchData, "hello world");



  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Servie Supplier Name"
              value={formvalue?.ServiceSupplierName}
              name="ServiceSupplierName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.serviceSupplierName)}
              helperText={errors.serviceSupplierName}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Address"
              name="Address"
              value={formvalue?.Address}
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
              name="Contact_No"
              value={formvalue?.Contact_No}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.contact_No)}
              helperText={errors.contact_No}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Credit Limit"
              name="Credit_Limit"
              value={formvalue?.Credit_Limit}
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
              name="Status"
              value={formvalue?.Status}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.status)}
              helperText={errors.status}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Remarks"
              name="Remarks"
              value={formvalue?.Remarks}
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
              name="Category"
              value={formvalue?.Category}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.category)}
              helperText={errors.category}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Sub category"
              name="Sub_Category"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.sub_Category)}
              helperText={errors.sub_Category}
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
