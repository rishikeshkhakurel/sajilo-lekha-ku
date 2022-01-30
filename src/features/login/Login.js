import React from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import { Button, TextField } from "@mui/material";

export default function Login() {
  // css for textfield
  const styleTextField = {
    width: "80%",
    marginBottom: 10,
  };

  return (
    <>
      <RegLogElement title="Login">
        <form>
          {/* Textfield for username */}
          <TextField
            variant="standard"
            name="username"
            label="Username"
            placeholder="Enter your name"
            style={styleTextField}
          />

          {/* Textfield for password */}
          <TextField
            variant="standard"
            name="password"
            label="Password"
            placeholder="Enter password"
            style={styleTextField}
          />

          <Button variant="contained">
            Log in
          </Button>
        </form>
      </RegLogElement>
    </>
  );
}
