import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import useCustomer from "../hooks/useCustomer";

function BillPayment() {
  const [CustomerName, setCustomerName] = useState("");
  const [CustomerId, setCustomerId] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [transctionMethod, settransctionMethod] = useState("TM11");
  const [receiptNumber, setReceiptNumber] = useState();
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [remarks, setRemark] = useState();
  const { Customer } = useCustomer();
  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/getReceiptNo?id=${CustomerId}`)
      .then((res) => {
        setReceiptNumber(res.receiptNo);
      });
  }, [CustomerId]);

  const onSubmit=()=>{
      const data={
        transactionCategory:'TC-CBP',
        agent_Name:CustomerName,
        agent_Contact_No:Contact,
        agent_Address:Address,
        receiptNo:receiptNumber,
        transactionDate: date,
        paidAmount:amount,
        transactionMethod:transctionMethod,
        remarks:remarks
      }
      axiosInstance
      .post(http_config.BASE_URL + `/api/createBillPayment`, data)
      .then((res) => {
        console.log(res);
      });

  }
  return (
    <Paper>
      <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
        Bill Payment
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Bill Number : {receiptNumber ? receiptNumber : 0}
      </Typography>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Paper>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Customer}
            onChange={(e, value) => {
              setCustomerName(value?.CustomerName);
              setAddress(value.Address);
              setContact(value.Contact_No);
              setCustomerId(value._id);
            }}
            getOptionLabel={(option) =>
              option?.CustomerName +
              " , " +
              option?.Contact_No +
              " , " +
              option?.Address
            }
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField autocomplete="off" {...params} label="Customer Name" />
            )}
          />
          <Paper>
          <Typography variant="h4" sx={{mt:2}}>INVOICE DATE</Typography>
          <TextField
            sx={{ marginTop: "20px" }}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Paper>
          <Typography variant="h5" sx={{ mb: 1, mt: 4 }}>
            INVOICE TO
          </Typography>
          <Typography variant="body1">Name: {CustomerName}</Typography>
          <Typography variant="body1">Address: {Address} </Typography>
          <Typography variant="body1">Contact: {Contact} </Typography>
          <Select
            sx={{ mt: 2 }}
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transctionMethod}
            defaultValue="TM11"
            onChange={(e) => settransctionMethod(e.target.value)}
          >
            <MenuItem value="TM11">Cash</MenuItem>
            <MenuItem value="TM22">Bank Deposite</MenuItem>
          </Select>
          <Paper sx={{ display: "flex", mt: 2 }}>
            <TextField
              id="standard-basic"
              placeholder=" 500"
              label="Amount in Figure"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Paper>
          <Paper sx={{ display: "flex", mt: 2 }}>
            <TextField
              id="standard-basic"
              placeholder=" Remark"
              label="Remark"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={remarks}
              onChange={(e) => setRemark(e.target.value)}
            />
          </Paper>
        </Paper>
        
      </Grid>
      <Button
        color="secondary"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => onSubmit()}
      >
        Submit
      </Button>
    </Paper>
  );
}

export default BillPayment;
