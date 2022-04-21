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
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useCustomer from "../hooks/useCustomer";
import DialogComp from "../../../common/component/Dialog";

const CustomerInvoice = () => {
  const [CustomerName, setCustomerName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [CustomerPopup, setCustomerPopup] = useState(false);
  const [invoice, setInvoice] = useState([
    {
      ProductName: "",
      CompanyName: "",
      Colour: "",
      Size: "",
      Quality: "",
      Unit: [],
      Sold_Equivalent_SI_Value:[],
      Rate: [],
      CostPrice: [],
    },
  ]);
  
  const [invoiceData, setInvoiceData] = useState([
    {
      ProductName: "",
      Sold_Equivalent_SI_Value:"",
      CompanyName: "",
      Colour: "",
      Size: "",
      Quality: "",
      Unit: "" ,
      Rate: "" ,
      CostPrice: "",
      COGS:"",
    },
  ]);
  React.useEffect(() => {
    console.log("*******88", invoice);
    console.log("*******99", invoiceData);
  });
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

    setInvoice((prevState) => [...prevState],state);
    setInvoiceData((prevState) => [...prevState],updatedInvoice);
  };

  const setInvoiceDataHandler = (index, value,i) => {
    const state = invoiceData;
    if (value.Unit) {
      state[index].Unit = value?.Unit;
      state[index].Rate = invoice[index]?.Rate[i];
      state[index].CostPrice = invoice[index]?.CostPrice[i];
    }
    if (value.Quantity) {
      console.log(invoice[index].Rate.indexOf(invoiceData[index]?.Rate))
      state[index].Quantity = value?.Quantity;
      state[index].SubTotal = value?.Quantity*invoiceData[index]?.Rate; 
      state[index].Sold_Equivalent_SI_Value = value?.Quality*invoice[index]?.Sold_Equivalent_SI_Value[invoice[index].Rate.indexOf(invoiceData[index]?.Rate)];
      state[index].COGS = value?.Quantity*invoiceData[index]?.CostPrice;
    }
    setInvoiceData((prevState) => [...prevState],state);
  };

  const handleRow = () => {
    setInvoice((prevState) => [
      ...prevState,
      {
        ProductID:"",
        Sold_Equivalent_SI_Value:[],
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
        ProductID:"",
        Sold_Equivalent_SI_Value:"",
        ProductName: "",
        CompanyName: "",
        Colour: "",
        Size: "",
        Quality: "",
        Unit: "",
        Rate: "",
        Quantity: "",
        SubTotal:""
      },
    ]);
  };

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
          sx={{ maxHeight: "600px", minHeight: "300px" }}
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
                              Sold_Equivalent_SI_Value: value?.Equivalent_SI_Value,
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
                          onChange={(e,unit)=>{
                            setInvoiceDataHandler(index,{
                              Unit:unit,
                            },value.Unit.indexOf(unit))
                          }}
                          getOptionLabel={(option) =>
                            option
                          }
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
                    <Typography variant="body1">
                        {value.Size}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <TextField
                        id="standard-basic"
                        placeholder="10"
                        variant="standard"
                        onChange={(e)=>setInvoiceDataHandler(index,{
                          Quantity:e.target.value,
                        })}
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
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleRow}>
          Add Row
        </Button>
      </Paper>
    </>
  );
};

export default CustomerInvoice;
