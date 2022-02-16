import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import userSlice from "../../redux/slice/User.Slice";
import Customer from "../Customer/view";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Product from "../Product/view";
import Register from "../Register/Register";

const AppRoutes = () => {
  const login = useSelector((state) => state.userSlice);
  console.log("login", login.data);
  return (
    <BrowserRouter>
      <Routes>
        {login.data.login && (
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        )}
        {!login.data.login && (
          <React.Fragment>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
