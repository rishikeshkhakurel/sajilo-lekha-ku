import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useEditSupplier from "../hooks/EditSupplier";

export default function EditServiceSupplier() {
<<<<<<< HEAD
  const { formvalue, handleSubmit, handleChange, errors, fetchData } =
    useEditSupplier();
=======
  const { handleSubmit, handleChange, errors, fetchData, formvalue } = EditSupplier();
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92

  console.log(fetchData, "hello world");

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Servie Supplier Name"
<<<<<<< HEAD
              name="serviceSupplierName"
=======
              value={formvalue?.ServiceSupplierName}
              name="ServiceSupplierName"
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              value={formvalue.serviceSupplierName}
             
            />

            <TextField
              sx={{ width: "45%" }}
              label="Address"
<<<<<<< HEAD
              name="address"
              value={formvalue.address}
=======
              name="Address"
              value={formvalue?.Address}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
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
<<<<<<< HEAD
              name="contact_No"
              value={formvalue.contact_No}

=======
              name="Contact_No"
              value={formvalue?.Contact_No}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.contact_No)}
              helperText={errors.contact_No}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Credit Limit"
<<<<<<< HEAD
              name="credit_Limit"
              value={formvalue.credit_Limit}

=======
              name="Credit_Limit"
              value={formvalue?.Credit_Limit}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
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
<<<<<<< HEAD
              name="status"
              value={formvalue.status}

=======
              name="Status"
              value={formvalue?.Status}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.status)}
              helperText={errors.status}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Remarks"
<<<<<<< HEAD
              name="remarks"
              value={formvalue.remarks}

=======
              name="Remarks"
              value={formvalue?.Remarks}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
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
<<<<<<< HEAD
              name="category"
              value={formvalue.category}

=======
              name="Category"
              value={formvalue?.Category}
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.category)}
              helperText={errors.category}
            />

<<<<<<< HEAD
           
=======
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
>>>>>>> e37e9332fb0fb2a28622506817bd1fb6e8b71c92
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
