import React, { useMemo } from "react";
import { TextField, Box, Button } from "@mui/material";
import AddTax from "./hooks/tax.js";
import Tables from "./table.js";

export default function Tax() {
  const { handleChange, handleOnChange, onSubmit } = AddTax();

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          p: 5,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <TextField
            sx={{ ml: 1 }}
            type="date"
            label="From"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />

          <TextField
            sx={{
              ml: 1,
            }}
            type="date"
            label="To"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Box>

        <Tables />

        {/* For add tax */}
        <Box sx={{ mt: 5 }}>
          <form onSubmit={onSubmit}>
            <TextField
              type="date"
              label=" Add Date"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              name="addDate"
            />

            <TextField
              sx={{ ml: 3 }}
              type="number"
              label=" Add Amount"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              name="addAmount"
            />

            <Button
              sx={{ ml: 3, height: "50px" }}
              type="submit"
              variant="contained"
            >
              Add to pay tax
            </Button>
          </form>

          {/* To pay tax */}
        </Box>

        <Box sx={{ mt: 4 }}>
          <form>
            <TextField
              type="date"
              label=" Add Date"
              InputLabelProps={{ shrink: true }}
              name="addDate"
              onChange={handleOnChange}
            />

            <TextField
              sx={{ ml: 3 }}
              type="number"
              label=" Add Amount"
              InputLabelProps={{ shrink: true }}
              name="payAmount"
              onChange={handleOnChange}
            />

            <Button
              sx={{ ml: 3, height: "50px", width:"130px" }}
              type="submit"
              variant="contained"
            >
              Pay tax
            </Button>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}
