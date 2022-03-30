import React from "react";
import { Box, TextField, Button, Controller } from "@mui/material";
import Staff from "../hooks/staff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

export default function AddStaff() {
  const { handleSubmit, handleChange, errors, status } = Staff();

  return (
    <React.Fragment>
      <Box sx={{ m: 3, p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <TextField
              sx={{ ml: 1, flex: 1 }}
              label="Name"
              name="staffName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.staffName)}
              helperText={errors.staffName}
            />

            <TextField
              sx={{ ml: 1, flex: 1 }}
              label="Address"
              name="address"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />

            <TextField
              sx={{ ml: 1, flex: 1 }}
              onChange={handleChange}
              label="Contact"
              type="number"
              name="contact_No"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.contact_No)}
              helperText={errors.contact_No}
            />

            <Box sx={{ ml: 2 }}>
              <FormControl
                sx={{ width: "150px" }}
                error={Boolean(errors.status)}
              >
                <InputLabel id="status">Status</InputLabel>

                <Select
                  inputProps={{ name: "status" }}
                  value={status}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value={"Good"}>Good</MenuItem>
                  <MenuItem value={"Bad"}>Bad</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                </Select>

                <FormHelperText>{errors.status}</FormHelperText>
              </FormControl>
            </Box>
            {/* <TextField
            sx={{ ml: 1, flex: 1 }}
            label="Status"
            name="status"
            required
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={Boolean(errors.status)}
            helperText={errors.status}
          /> */}
          </Box>

          <Box sx={{ display: "flex" }}>
            <TextField
              sx={{ ml: 1, flex: 1, width: "80%" }}
              label="Remarks"
              name="remarks"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
              onChange={handleChange}
            />

            <Button
              sx={{ height: "50px", ml: 3 }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </React.Fragment>
  );
}
