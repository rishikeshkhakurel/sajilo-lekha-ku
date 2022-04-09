import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import userSlice from "../../redux/slice/User.Slice";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Register from "../Register/Register";
import Tax from "../Tax/index";
import Invoice from "../Cutomer_invoice/invoice";
import AddStaff from "../staff/addStaff/view/addStaff";
import StaffLedger from "../staff/staffLedger/staffLedger";
import StaffDetails from "../staff/staffDetails/view/StaffDetails.js";
import AddLoan from "../Loan/AddLoan/view/AddLoan";
import PayPrinciple from "../Loan/pay_principle/view/PayPrinciple.js";
import PayInterest from "../Loan/pay_interest/view/PayInterest";
import AddProduct from "../Product/view/addProduct";
import ProductDetail from "../ProductDetail/view/ProductDetail";
import AddCustomer from "../Add_Customer/views/Add_Customer";
import CustomerDetail from "../CustomerDetail/views/CustomerDetail";
import LoanDetail from "../Loan/LoanDetail/view/LoanDetail";


const AppRoutes = () => {
  const login = useSelector((state) => state.userSlice);
  console.log("login", login.data);
  return (
    <BrowserRouter>
      <Routes>
        {login.data.login && (
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            

            <Route path="customerDetail" element={<CustomerDetail />} />

            <Route path="addCustomer" element={<AddCustomer />} />

            <Route path="addProduct" element={<AddProduct />} />
             
             <Route path="productDetail" element={<ProductDetail/>} />

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="tax" element={<Tax />} />
            <Route path="CustomerInvoice" element={<Invoice />} />

            <Route path="addStaff" element={<AddStaff />} />

            <Route path="staffLedger" element={<StaffLedger />} />

            <Route path="StaffDetails" element={<StaffDetails />} />

            <Route path="addLoan" element={<AddLoan />} />

            <Route path="payPrinciple" element={<PayPrinciple />} />

            <Route path="payInterest" element={<PayInterest />} />

            <Route path="loanDetail" element={<LoanDetail />} />

          </Route>
        )}
        {!login.data.login && (
          <React.Fragment>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
