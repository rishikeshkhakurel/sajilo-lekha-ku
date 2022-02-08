import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Customer from "../Customer/view";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Register from "../Register/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthElement />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
        </Route>
        
        <Route path="login" element = {<Login />} />
        <Route path="register" element = {<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
