import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import userSlice from "../../redux/slice/User.Slice";
import Customer from "../Customer/view";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Product from "../Product/view";
import Register from "../Register/Register";
import Tax from "../Tax/index";
import Invoice from "../Cutomer_invoice/invoice";
const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      dispatch(userSlice.actions.setData({ login: login }));
    }
  }, [dispatch]);
  const login = useSelector((state) => state.userSlice);
  console.log("login", login.data);
  return (
    <BrowserRouter>
      <Routes>
        {!login.data.login && (
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
            <Route path="product" element={<Product />} />
            <Route path = "tax" element={<Tax/>} />
            <Route path = "CustomerInvoice" element={<Invoice/>} />
            
          </Route>
        )}
        {!login.data.login && (
          <React.Fragment>
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
