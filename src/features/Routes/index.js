import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import userSlice from "../../redux/slice/User.Slice";
import Customer from "../Customer/view";
import Dashboard from "../Dashboard/view/index";
import AuthElement from "../Element/AuthElement";
import Login from "../login/Login";
import Register from "../Register/Register";

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
        {login.data.login && (
          <Route path="/" element={<AuthElement />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
          </Route>
        )}
        {!login.data.login && (
          <React.Fragment>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
