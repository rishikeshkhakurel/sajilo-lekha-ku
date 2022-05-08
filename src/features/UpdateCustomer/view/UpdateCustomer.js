import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCustomer from "../hooks/useCustomer";

 export default function UpdateCustomer() {
  const {
    handleSubmit,
    credit,
    setcredit,
    handleOnChange,
    formvalue,
    setformvalue,
    errors,
    
  

  } = useCustomer();

  const [update,setupdate]=useState(false);

  const editdata = useSelector((state) => state.editSlice.data);
  useEffect(() => {
    if (editdata.id === "customer") {
      console.log(editdata);
      setformvalue(editdata.data);
      setupdate(true)
    }
  }, [editdata, setformvalue]);
  return (
   <Box sx={{m:4}}> 
      <form onSubmit={handleSubmit }>
        

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
           

          <TextField
            sx={{width:"45%"}}
            id="filled-name"
            label="Name"
            name="customerName"
            value={formvalue.customerName}
            required
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
            error={Boolean(errors.customerName)}
            helperText={errors.cutomerName}
          />
          <TextField
            sx={{ width:"45%" }}
            id="filled-name"
            label="Phone Number"
            name="contact_No"
            value={formvalue.contact_No}
            type="number"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contact_No)}
            helperText={errors.contact_No}

          />
       </Box>


       <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>

          <TextField
            sx={{ width:"45%" }}
            id="filled-name"
            label="Address"
            value={formvalue.address}
            name="address"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.address)}
            helperText={errors.address}

          />
          <TextField
            sx={{ width:"45%" }}
            id="filled-name"
            label="Contractor_Name"
            value={formvalue.contractor_Name}
            name="contractor_Name"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contractor_Name)}
            helperText={errors.contractor_Name}

          />

          </Box>
      
          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>
       
          <TextField
            sx={{ width:"45%" }}
            id="filled-name"
            label="Contractor Number"
            type="number"
            value={formvalue.contractor_ContactNo}
            name="contractor_ContactNo"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contractor_ContactNo)}
            helperText={errors.contractor_ContactNo}


          />

<TextField
            sx={{ width:"45%"}}
            id="filled-name"
            label="Remark"
            value={formvalue.remarks}
            name="remarks"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.remarks)}
            helperText={errors.remarks}
          />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>

      
<TextField
            sx={{ width:"45%"}}
            id="filled-name"
            label="Status"
            name="status"
            value={formvalue.status}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.status)}
            helperText={errors.status}
          />

          <FormControlLabel
            sx={{ ml: 1, flex: 1 }}
            control={
              <Checkbox
                defaultChecked
                onChange={(e) => {
                  setcredit(e.target.checked);
                  if (!e.target.checked) {
                    console.log(e.target.checked);
                    setformvalue({ ...formvalue, credit_Limit: "" });
                  }
                }}
              />
            }
            label="Allow Credit"
          />
          {credit ? (
            <TextField
              sx={{ width:"45%" }}
              id="filled-name"
              label="Credit Limit"
              name="credit_Limit"
    
              value={formvalue.credit_Limit}
              InputLabelProps={{ shrink: true }}
              required
              onChange={handleOnChange}
              error={Boolean(errors.credit_Limit)}
            helperText={errors.credit_Limit}
            />
          ) : (
            <TextField
              sx={{ ml: 1, flex: 1 }}
              id="filled-name"
              label="credit Limit"
              disabled
            />
          )}
         
         </Box>
        
         <Box sx={{ display: "flex", justifyContent: "space-between", mt:4 }}>
          <Button type="submit" variant="contained" >
            Add Customer
          </Button>
        </Box>
      </form>

      </Box>
    
  );
}

