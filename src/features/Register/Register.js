import React, { useState } from "react";
import RegLogElement from "../Register_Login_Elem/RegLogElement";
import { validate } from "./registerValidate";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import http_config from "../../common/config/httpconfig/http_config";

export default function Register(props) {
  const [values, setValue] = useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //provide the update value typed by the user

    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    //prevent the default action of form
    e.preventDefault();

    //checks the errors for the input fields

    setErrors(validate(values));

    //store the value after submission
    const formValue = { ...values };
    // console.log(formValue);

    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.contact
    ) {
      axios
        .post(http_config.BASE_URL + "/auth/register", formValue)
        .then((resp) => {
          console.log(resp);
        });
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
          {/* Textfield for userName */}
          <TextField
            variant="standard"
            name="userName"
            label="Username"
            placeholder="Enter your name"
            style={styleTextField}
            onChange={handleChange}
            value={values.userName}
            error={Boolean(errors.userName)}
            helperText={errors.userName}
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

          {/* Textfield for phone contact */}
          <TextField
            variant="standard"
            name="contact"
            label="Phone number"
            placeholder="Enter your phone number"
            style={styleTextField}
            onChange={handleChange}
            value={values.contact}
            type="contact"
            error={Boolean(errors.contact)}
            helperText={errors.contact}
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

          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: "40px",
            }}
          >
            Submit
          </Button>
        </form>
      </RegLogElement>
    </React.Fragment>
  );
}
