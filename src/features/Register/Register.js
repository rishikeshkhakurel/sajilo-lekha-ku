import React, { useState } from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import validate from "./registerValidate";
import { TextField, Button } from "@mui/material";

export default function Register(props) {
  const [values, setValue] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  //provide the update value typed by the user
  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //checks the errors for the input fields

    setErrors(validate(values));

    // only store form value if input data are valid after Submit

    if (Object.entries(errors).length === 0) {
      const formValue = { ...values };
      // console.log(formValue);
    }
    else{
      alert("Invalid data entry");
    }
  };

  // css for textfield
  const styleTextField = {
    width: "80%",
    marginBottom: 10,
  };

  return (
    <React.Fragment>
      <RegLogElement title="Register">
        <form onSubmit={handleSubmit}>
          {/* Textfield for username */}
          <TextField
            variant="standard"
            name="username"
            label="Username"
            placeholder="Enter your name"
            style={styleTextField}
            onChange={handleChange}
            value={values.username}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />

          {/* Textfield for email address */}
          <TextField
            variant="standard"
            name="email"
            label="Email"
            placeholder="Enter your email address"
            style={styleTextField}
            onChange={handleChange}
            value={values.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          {/* Textfield for phone number */}
          <TextField
            variant="standard"
            name="number"
            label="Phone Number"
            placeholder="Enter your phone number"
            style={styleTextField}
            onChange={handleChange}
            value={values.number}
            type="number"
            error={Boolean(errors.number)}
            helperText={errors.number}
          />

          {/* Textfield for password */}
          <TextField
            variant="standard"
            label="Password"
            placeholder="Enter password"
            style={styleTextField}
            type="password"
            onChange={handleChange}
            name="password"
            value={values.password}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          {/* Textfield for confirm password */}
          <TextField
            variant="standard"
            label="Confirm password"
            placeholder="Enter confirm password"
            type="password"
            style={styleTextField}
            onChange={handleChange}
            name="confirmPassword"
            value={values.confirmPassword}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </RegLogElement>
    </React.Fragment>
  );
}
