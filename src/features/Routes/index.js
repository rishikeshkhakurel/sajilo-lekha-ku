import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Register from "../Register/Register";
// import Tax from "../Tax/index";
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
import CustomerInvoice from "../Cutomer_invoice/view";
import AddGoodsSupplier from "../Supplier/AddGoodsSupplier/view/AddGoodsSupplier";
import InterestDetail from "../Loan/DisplayInterest/views";
import CustomerLedger from "../CustomerLedger/view/index";
import ServiceSupplier from "../Supplier/AddServiceSupplier/view/index";
import TaxDetail from "../Tax/TaxDetail/view";
import AddTax from "../Tax/AddTax/view";
import PayTax from "../Tax/PayTax/view";
import PersonalAccount from "../PersonalAccount/PersonalAccount";
import GoodsSupplierDetail from "../Supplier/GoodsSupplierDetails/view";
import ServiceSupplierDetail from "../Supplier/ServiceSupplierDetail/view";
import UpdateProduct from "../ProductSave/view";
import EditServiceSupplier from "../Supplier/ServiceSupplierDetail/EditSupplier/view/index"
import EditGoodsSupplier from "../Supplier/GoodsSupplierDetails/EditGoodsSupplier/view";

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


            {/* <Route path="tax" element={<Tax />} /> */}
            
            <Route path="CustomerInvoice" element={<CustomerInvoice />} />

            <Route path="taxDetail" element={<TaxDetail />} />
           
            <Route path="addStaff" element={<AddStaff />} />

            <Route path="staffLedger" element={<StaffLedger />} />

            <Route path="StaffDetails" element={<StaffDetails />} />

            <Route path="addLoan" element={<AddLoan />} />

            <Route path="payPrinciple" element={<PayPrinciple />} />

            <Route path="payInterest" element={<PayInterest />} />

            <Route path="loanDetail" element={<LoanDetail />} />

            <Route path="interestDetail" element={<InterestDetail />} />
            

            <Route path="addGoodsSupplier" element={<AddGoodsSupplier />} />

            <Route path="addServiceSupplier" element={<ServiceSupplier />} />

            <Route path="addTax" element={<AddTax />} />

            <Route path="payTax" element={<PayTax />} />
            
            <Route path= "customerLedger" element={<CustomerLedger/>} />

            <Route path= "personalAccount" element={<PersonalAccount />} />

            <Route path = "personalAccount/:id" element={<PersonalAccount />} />

            <Route path="goodsSupplierDetail" element={<GoodsSupplierDetail />} />

             
            <Route path="serviceSupplierDetail" element={<ServiceSupplierDetail />} />

            <Route path="updateProduct" element={<UpdateProduct />} />

            <Route path="updateServiceSupplier" element={<EditServiceSupplier />} />
          

            <Route path="updateGoodsSupplier" element={<EditGoodsSupplier />} />


            
            
            

            

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
