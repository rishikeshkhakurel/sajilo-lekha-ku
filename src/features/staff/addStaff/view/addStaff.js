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
         
         <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <TextField
              sx={{ width:"45%" }}
              label="Name"
              name="staffName"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.staffName)}
              helperText={errors.staffName}
            />

            <TextField
              sx={{ width:"45%" }}
              label="Address"
              name="address"
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />

            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", mt:4}}>

            <TextField
              sx={{ width:"45%" }}
              onChange={handleChange}
              label="Contact"
              type="number"
              name="contact_No"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.contact_No)}
              helperText={errors.contact_No}
            />

        
              <FormControl
                sx={{ width: "45%" }}
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
          

          <Box sx={{ display: "flex", mt:4 }}>
            <TextField
              sx={{  width: "45%" }}
              label="Remarks"
              name="remarks"
              required
              InputLabelProps={{ shrink: true }}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks}
              onChange={handleChange}
            />
           </Box>
            <Button
              sx={{ height: "50px", mt:4 }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          
        </form>
      </Box>
    </React.Fragment>
  );
}
