import React, {useState} from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import { Button, TextField } from "@mui/material";
import loginValidate from "./loginValidate";

export default function Login() {
   
  const [loginValue, setLoginValue] = useState({
    name:"",
    password:""
  });

  const [loginError,setLoginError] = useState({});

  const handleOnChange = (e) => {

    //update the value and stores in loginValue whenever the user types in input field
   setLoginValue({...loginValue, [e.target.value]:e.target.name })
  }

  const handleOnSubmit = (e) => {

    //prevent the default action of form
     e.preventDefault();

     //checks the error for the input field
     setLoginError(loginValidate(loginValue));
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
          {/* Textfield for username */}
          <TextField
            variant="standard"
            name="username"
            label="Username"
            placeholder="Enter your name"
            style={styleTextField}
            onChange={handleOnChange}
            error = {Boolean(loginError.username)}
            helperText = {loginError.username}
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
