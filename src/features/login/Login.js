import React, { useState } from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import { Button, TextField } from "@mui/material";
import loginValidate from "./loginValidate";
import axios from "axios";
import http_config from "../../common/config/httpconfig/http_config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/slice/User.Slice";

export default function Login() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({
    userName: "",
    password: "",
  });

  const [loginError, setLoginError] = useState({});

  const handleOnChange = (e) => {
    //update the value and stores in loginValue whenever the user types in input field
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    //prevent the default action of form
    e.preventDefault();

    //checks the error for the input field
    setLoginError(loginValidate(loginValue));

    //store the value after submission
    const formValue = { ...loginValue };
    // console.log(formValue);

    if (!loginError.userName && !loginError.password) {
      console.log(formValue);

      axios
        .post(http_config.BASE_URL + "/auth/login", formValue)
        .then((resp) => {
          console.log(resp);
          if (resp.data.login) {
            dispatch(userSlice.actions.setData({ login: true }));
            navigate("/");
            localStorage.setItem('login',resp.data.login);
            localStorage.setItem('accessToken',resp.data.accessToken);
            localStorage.setItem('refreshToken',resp.data.refreshToken); 
          }
        });
    }
  };

  // css for textfield
  const styleTextField = {
    width: "80%",
    marginBottom: 10,
  };

  return (
    <>
      <RegLogElement title="Login">
        <form onSubmit={handleOnSubmit}>
          {/* Textfield for userName */}
          <TextField
            variant="standard"
            name="userName"
            label="Username"
            placeholder="Enter your name"
            style={styleTextField}
            onChange={handleOnChange}
            error={Boolean(loginError.userName)}
            helperText={loginError.userName}
          />

          {/* Textfield for password */}
          <TextField
            variant="standard"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            style={styleTextField}
            onChange={handleOnChange}
            error={Boolean(loginError.password)}
            helperText={loginError.password}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: "40px",
            }}
          >
            Log in
          </Button>
        </form>
      </RegLogElement>
    </>
  );
}
