import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useCustomer from "../hooks/useCustomer";
import DialogComp from "../../../common/component/Dialog";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import http_config from "../../../common/config/httpconfig/http_config";

const CustomerInvoice = () => {
  const [CustomerName, setCustomerName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [CustomerPopup, setCustomerPopup] = useState(false);
  const [TotalAmount, setTotalAmount] = useState();  
  const [COGS, setCOGS] = useState();  
  const [Discount, setDiscount] = useState();  
  const [PaidAmount, setPaidAmount  ] = useState();  
  const [AmountNeedtoPay, setAmountNeedtoPay  ] = useState();  
  const [DueAmount, setDueAmount  ] = useState();  
  const [Remark, setRemark  ] = useState("");  
  const [invoice, setInvoice] = useState([
    {
      ProductName: "",
      CompanyName: "",
      Colour: "",
      Size: "",
      Quality: "",
      Unit: [],
      Sold_Equivalent_SI_Value: [],
      Rate: [],
      CostPrice: [],
    },
  ]);

  const [invoiceData, setInvoiceData] = useState([
    {
      ProductName: "",
      Sold_Equivalent_SI_Value: "",
      CompanyName: "",
      Colour: "",
      Size: "",
      Quality: "",
      Unit: "",
      Rate: "",
      CostPrice: "",
      COGS: "",
    },
  ]);
  useEffect(() => {
    setDueAmount(TotalAmount-PaidAmount-Discount)
    setAmountNeedtoPay(TotalAmount-Discount)
    
  },[Discount,PaidAmount,TotalAmount]);
  const setInvoiceHandler = (index, value) => {
    const state = invoice;
    const updatedInvoice = invoiceData;
    if (value.ProductID) {
      state[index].ProductID = value?.ProductID;
      updatedInvoice[index].ProductID = value?.ProductID;
    }
    if (value.CompanyName) {
      state[index].CompanyName = value?.CompanyName;
      updatedInvoice[index].CompanyName = value?.CompanyName;
    }
    if (value.ProductName) {
      state[index].ProductName = value?.ProductName;
      updatedInvoice[index].ProductName = value?.ProductName;
    }

    if (value.Sold_Equivalent_SI_Value) {
      state[index].Sold_Equivalent_SI_Value = value?.Sold_Equivalent_SI_Value;
    }

    if (value.Colour) {
      state[index].Colour = value?.Colour;
      updatedInvoice[index].Colour = value?.Colour;
    }

    if (value.Size) {
      state[index].Size = value?.Size;
      updatedInvoice[index].Size = value?.Size;
    }

    if (value.Unit) {
      state[index].Unit = value?.Unit;
      updatedInvoice[index].Unit = value?.Unit[0];
    }

    if (value.Rate) {
      state[index].Rate = value?.Rate;
      updatedInvoice[index].Rate = value?.Rate[0];
    }

    if (value.CostPrice) {
      state[index].CostPrice = value?.CostPrice;
      updatedInvoice[index].CostPrice = value?.CostPrice[0];
    }

    setInvoice((prevState) => [...prevState], state);
    setInvoiceData((prevState) => [...prevState], updatedInvoice);
  };

  const setInvoiceDataHandler = (index, value, i) => {
    const state = invoiceData;
    if (value.Unit) {
      state[index].Unit = value?.Unit;
      state[index].Rate = invoice[index]?.Rate[i];
      state[index].CostPrice = invoice[index]?.CostPrice[i];
    }
    if (value.Quantity) {
      console.log(invoice[index].Rate.indexOf(invoiceData[index]?.Rate));
      state[index].Quantity = value?.Quantity;
      state[index].SubTotal = value?.Quantity * invoiceData[index]?.Rate;
      state[index].Sold_Equivalent_SI_Value =
        value?.Quality *
        invoice[index]?.Sold_Equivalent_SI_Value[
          invoice[index].Rate.indexOf(invoiceData[index]?.Rate)
        ];
      state[index].COGS = value?.Quantity * invoiceData[index]?.CostPrice;
    }
    setInvoiceData((prevState) => [...prevState], state);
  };

  const handleRow = () => {
    setInvoice((prevState) => [
      ...prevState,
      {
        ProductID: "",
        Sold_Equivalent_SI_Value: [],
        ProductName: "",
        CompanyName: "",
        Colour: "",
        Size: "",
        Quality: "",
        Unit: [],
        Rate: [],
        Quantity: "",
      },
    ]);
    setInvoiceData((prevState) => [
      ...prevState,
      {
        ProductID: "",
        Sold_Equivalent_SI_Value: "",
        ProductName: "",
        CompanyName: "",
        Colour: "",
        Size: "",
        Quality: "",
        Unit: "",
        Rate: "",
        Quantity: "",
        SubTotal: "",
      },
    ]);
  };

  useEffect(()=>{
    let Amount=0;
    let cogs=0;
    invoiceData.map((value)=>{
      Amount=Amount+value.SubTotal;
      cogs=cogs+value.COGS;

    })
    setTotalAmount(Amount)
    setCOGS(cogs)

  },[invoiceData])

  const DeleteRow = (index) => {
    const state = invoice;
    const updatedInvoice = invoiceData;
    state.pop(index);
    updatedInvoice.pop(index);
    setInvoice((prevState) => [...prevState], state);
    setInvoiceData((prevState) => [...prevState], updatedInvoice);
  };

  const onSubmit=()=>{
    console.log("data")
    const data={
      totalAmount: TotalAmount,
      discountedAmount: Discount,
      paidAmount: PaidAmount,
      dueAmount: DueAmount,
      COGS: COGS,
      transactionMethod: "TM22",
      remarks:Remark,
      transactionDetail:invoiceData
    }
    axiosInstance.post(http_config.BASE_URL + `/api/createInvoice`,data).then((res)=>{
      console.log(res)
    })

  }
  const { Customer, Product } = useCustomer();

  return (
    <>
      <DialogComp
        open={CustomerPopup}
        title="Customers"
        onClose={() => setCustomerPopup(false)}
        sx={{ overflowY: "visible" }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Customer}
          onChange={(e, value) => {
            setCustomerName(value?.CustomerName);
            setAddress(value.Address);
            setContact(value.Contact_No);
            setCustomerPopup(false);
          }}
          getOptionLabel={(option) =>
            option?.CustomerName +
            " , " +
            option?.Contact_No +
            " , " +
            option?.Address
          }
          sx={{ width: 300, p: 1 }}
          renderInput={(params) => (
            <TextField autocomplete="off" {...params} label="Customer Name" />
          )}
        />
      </DialogComp>
      <Paper sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
          Invoice No: 1234
        </Typography>
        <Divider />
        <Paper
          sx={{
            mt: 2,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Paper>
            <Typography variant="h5" sx={{ mb: 1 }}>
              INVOICE TO
            </Typography>
            <Typography variant="body1" onClick={() => setCustomerPopup(true)}>
              Name: {CustomerName}
            </Typography>
            <Typography variant="body1">Address: {Address} </Typography>
            <Typography variant="body1">Contact: {Contact} </Typography>
          </Paper>
          <Paper>
            <Typography variant="h4">INVOICE DATE {Address} </Typography>
            <TextField type="date" />
          </Paper>
        </Paper>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: "350px", minHeight: "350px" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#589e59", fontWeight: "550" }}>
                  S.N
                </TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell width={"200px"} align="left">
                  Product Name
                </TableCell>
                <TableCell width={"200px"} align="left">
                  Company Name
                </TableCell>
                <TableCell align="left">Colour</TableCell>
                <TableCell align="left">Unit</TableCell>
                <TableCell align="left">Size</TableCell>
                <TableCell width={"300px"} align="left">
                  Quantity
                </TableCell>
                <TableCell align="left">Rate</TableCell>
                <TableCell align="left">SubTotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice?.map((value, index) => {
                return (
                  <TableRow key={value.id}>
                    <TableCell component="th" scope="row">
                      <div className="bulktabeldata">{index + 1}</div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={Product}
                          onChange={(e, value) => {
                            setInvoiceHandler(index, {
                              ProductID: value?._id,
                              CompanyName: value?.CompanyName,
                              ProductName: value?.ProductName,
                              Colour: value?.Colour,
                              Size: value?.Size,
                              Unit: value?.Unit,
                              Rate: value?.SellingPrice,
                              Sold_Equivalent_SI_Value:
                                value?.Equivalent_SI_Value,
                              CostPrice: value?.CostPrice,
                            });
                          }}
                          getOptionLabel={(option) =>
                            option?.ProductName +
                            " , " +
                            option?.CompanyName +
                            " , " +
                            option?.Colour +
                            " , " +
                            option?.Size
                          }
                          sx={{ width: 300, p: 1 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              autocomplete="off"
                              label="Product Detail"
                            />
                          )}
                        />
                      </FormControl>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body1">
                        {value.ProductName}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body1">
                        {value.CompanyName}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body1">{value.Colour}</Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={value.Unit}
                        onChange={(e, unit) => {
                          setInvoiceDataHandler(
                            index,
                            {
                              Unit: unit,
                            },
                            value.Unit.indexOf(unit)
                          );
                        }}
                        getOptionLabel={(option) => option}
                        sx={{ width: 150, p: 1 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            autocomplete="off"
                            label="Unit"
                          />
                        )}
                      />
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body1">{value.Size}</Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <TextField
                        id="standard-basic"
                        placeholder="10"
                        variant="standard"
                        onChange={(e) =>
                          setInvoiceDataHandler(index, {
                            Quantity: e.target.value,
                          })
                        }
                      />
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body1">
                        {invoiceData[index]?.Rate}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body1">
                        {invoiceData[index]?.SubTotal}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <DeleteIcon onClick={(e) => DeleteRow(index)} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Paper
          sx={{
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Paper>
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleRow}>
              Add Row
            </Button>
          </Paper>
          <Paper>
            <Typography varient="body1">Total Amount : {TotalAmount ? TotalAmount : 0}</Typography>
            <Paper sx={{ display: "flex", mt: 2 }}>
              <TextField
                id="standard-basic"
                placeholder=" 100"
                label="Discount Amount"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={Discount}
                onChange={(e)=>setDiscount(e.target.value)}
              />
            </Paper>

            <Typography varient="body1" mt={2}>
              Amount to Pay : {AmountNeedtoPay? AmountNeedtoPay : 0}
            </Typography>

            <Paper sx={{ display: "flex", mt: 2 }}>
              <TextField
                id="standard-basic"
                placeholder=" 100"
                label="Paid Amount"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={PaidAmount}
                onChange={(e)=>setPaidAmount(e.target.value)}
              />
            </Paper>
            <Typography varient="body1" mt={2}>
              Due Amount : {DueAmount ? DueAmount : 0}
            </Typography>
            <Paper sx={{ display: "flex", mt: 2 }}>
              <TextField
                id="standard-basic"
                placeholder=" Good"
                label="Remark"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={Remark}
                onChange={(e)=>setRemark(e.target.value)}

              />
            </Paper>
            <Button
              color="secondary"
              variant="contained"
              sx={{ mt: 2 }}
              onClick={()=>onSubmit()}
            >
              Submit
            </Button>
          </Paper>
        </Paper>
      </Paper>
    </>
  );
};

export default CustomerInvoice;
