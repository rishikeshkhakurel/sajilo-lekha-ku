import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import InvoiceTable from "./index.js";
export default function Invoice() {
  const style = { display: "block", mb: 3 };

  return (
    <React.Fragment>
      <Box sx={{ m: 5, p: 4, width: "100%", m: "auto" }}>
        <Box>
          <TextField
            sx={style}
            label="INVOICE NO"
            name="Invoice number"
            type="number"
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        <Box sx={{ w: "100%", display: "flex" }}>
          <Box>
            <TextField
              sx={style}
              label="INVOICE TO"
              name="CustomerName"
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={style}
              label="Address"
              name="address"
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={style}
              label="Contact"
              name="contact"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Box sx={{ width: "70%" }}>
            <TextField
              sx={{ ml: 3 }}
              label="Contractor's Name"
              name="Name"
              required
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <Box>
            <TextField
              label="Invoice Date"
              name="date"
              type="date"
              required
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>

        <InvoiceTable/>

        {/* Css for payment method */}

        <Typography>Payment Method</Typography>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Cash" />

          <FormControlLabel control={<Checkbox />} label="Bank Deposit" />
        </FormGroup>

<Box sx={{display:'flex'}}>
    <Box sx={{width:"70%"}}>

        <Box sx={{ display: "flex", mt: 4 }}>
          <Box>
            <TextField
              sx={style}
              label="Discount"
              name="Discount"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={style}
              label="Subtotal"
              name="subtotal"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={style}
              label="Total"
              name="total"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />
          </Box>

<Box>
          <TextField
              sx={{ ml: 3, mb: 3, display:'block' }}
              label="Paid amount"
              name="due"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />
            

            <TextField
              sx={{ ml: 3, mb: 3}}
              label="Due amount"
              name="due"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />

            </Box>
          
        </Box>

        <Box>
          <TextField
            sx={{ width: "45%" }}
            label="Due in words"
            name="word"
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        </Box>

        <Box>

        <Box sx={{ mt: 4 }}>
          <TextField
            sx={style}
            label="Delivered By"
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            sx={style}
            label="Helpers"
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            sx={{ mb: 4 }}
            label="Made By "
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            sx={{ ml: 3 }}
            label="Checked By"
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            sx={style}
            label="Authorized Signature"
            type="text"
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        </Box>

        </Box>
        

      </Box>
    </React.Fragment>
  );
}
