import {
  Button,
  Paper,
  Box,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useProduct from "../hooks/useProduct";

export default function AddProduct() {
  const { handleOnChange, handleSubmit, errors, setUnit, setEquivalent_SI_Value, setCostPrice, setSellingPrice } = useProduct();
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Product Name"
              name="productName"
              onChange={handleOnChange}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.productName)}
              helperText={errors.productName}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Company Name"
              name="companyName"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.companyName)}
              helperText={errors.companyName}
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Size"
              name="size"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.size)}
              helperText={errors.size}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Colour"
              name="colour"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.colour)}
              helperText={errors.colour}
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Expiry Date"
              name="expireyDate"
              type="date"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.expireyDate)}
              helperText={errors.expireyDate}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Unit"
              name="unit"
              onChange={(e)=>setUnit(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.unit)}
              helperText={errors.unit}
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Equivalent SI Value"
              name="equivalent_SI_Value"
              onChange={ (e) => setEquivalent_SI_Value(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.equivalent_SI_Value)}
              helperText={errors.equivalent_SI_Value}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Cost Price"
              name="costPrice"
              onChange={(e) => setCostPrice(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.costPrice)}
              helperText={errors.costPrice}
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Selling Price"
              name="sellingPrice"
              onChange={(e) => setSellingPrice(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.sellingPrice)}
              helperText={errors.sellingPrice}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Minimum Stock Quantity"
              name="minimum_Stock_Quantity"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.minimum_Stock_Quantity)}
              helperText={errors.minimum_Stock_Quantity}
              type="number"
            />
          </Box>

          <Box>
            <TextField
              sx={{ width: "45%", mt: 4 }}
              name="stock_Quality_In_SI_Value"
              label="Stock Quantity In SI Value"
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.stock_Quality_In_SI_Value)}
              helperText={errors.stock_Quality_In_SI_Value}
            />
          </Box>

          <Button
            sx={{ mt: 4, height: "50px" }}
            type="submit"
            variant="contained"
          >
            Add product
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
