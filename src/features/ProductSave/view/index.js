import { Button, Box, TextField, Autocomplete, Stack } from "@mui/material";
import React from "react";
import { Product } from "../../ProductDetail/hooks/Product";
import useProduct from "../hooks/ProductSave";

export default function UpdateProduct() {
  const {
    handleOnChange,
    handleSubmit,
    errors,
    formvalue,
    setUnit,
    setEquivalent_SI_Value,
    setCostPrice,
    setSellingPrice,
  } = useProduct();

  Product();
  const date = formvalue?.expireyDate?.split("T");
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Product Name"
              name="productName"
              value={formvalue.productName}
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
              value={formvalue.companyName}
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
              value={formvalue.size}
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
              value={formvalue.colour}
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
              label="Expirey Date"
              name="expireyDate"
              type="date"
              value={date && date[0]}
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
              value={formvalue.unit}
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.unit)}
              helperText="kg,gm,bag"
            />
          </Box>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
            <TextField
              sx={{ width: "45%" }}
              label="Equivalent SI Value"
              name="equivalent_SI_Value"
              value={formvalue.equivalent_SI_Value}
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.equivalent_SI_Value)}
              helperText={errors.equivalent_SI_Value}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Cost Price"
              name="costPrice"
              value={formvalue.costPrice}
              onChange={handleOnChange}
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
              value={formvalue.sellingPrice}
              onChange={handleOnChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.sellingPrice)}
              helperText={errors.sellingPrice}
            />

            <TextField
              sx={{ width: "45%" }}
              label="Minimum Stock Quantity"
              name="minimum_Stock_Quantity"
              value={formvalue.minimum_Stock_Quantity}
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
              value={formvalue.stock_Quality_In_SI_Value}
              onChange={handleOnChange}
              required
              type="number"
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
            Update Product
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
