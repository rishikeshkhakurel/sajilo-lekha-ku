import React, {useState} from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import { Button, TextField } from "@mui/material";
import loginValidate from "./loginValidate";
import axios from "axios";
import http_config from "../../config/httpconfig/http_config";

export default function Login() {
   
  const [loginValue, setLoginValue] = useState({
    userName:"",
    password:""
  });

  const [loginError,setLoginError] = useState({});

  const handleOnChange = (e) => {

    //update the value and stores in loginValue whenever the user types in input field
   setLoginValue({...loginValue, [e.target.name]:e.target.value })
  }

  const handleOnSubmit = (e) => {

    

    //prevent the default action of form
     e.preventDefault();

     //checks the error for the input field
     setLoginError(loginValidate(loginValue));

     //store the value after submission
    const formValue = { ...loginValue };
    // console.log(formValue);
    if(!loginError.userName && !loginError.password){
      console.log(formValue)

      const resp=axios.post(http_config.BASE_URL+'/auth/login',formValue)
      console.log(resp)
    }
  }
 
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
            error = {Boolean(loginError.userName)}
            helperText = {loginError.userName}
          />

          {/* Textfield for password */}
          <TextField
            variant="standard"
            name="password"
            label="Password"
            placeholder="Enter password"
            style={styleTextField}
            onChange={handleOnChange}
            error = {Boolean(loginError.password)}
            helperText= {loginError.password}
          />

          <Button variant="contained" type="submit" sx = {{
            marginTop:"40px"
          }}>
            Log in
          </Button>
        </form>
      </RegLogElement>
    </>
  );
}
