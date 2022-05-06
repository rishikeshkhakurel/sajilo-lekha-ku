import React, { useState, useEffect } from "react";
import { Validate } from "../validate/validate";
import http_config from "../../../../common/config/httpconfig/http_config";
import axios from "axios";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import { useLocation } from "react-router-dom";

export default function StaffUpdate() {
  const [formvalue, setformvalue] = useState({
    staffName: "",
    address: "",
    contact_No: "",
    status: "",
    remarks: "",
  });

  const location = useLocation();

  const data = location.state;

  console.log(data, "honey");


  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState();


  useEffect(() => {
    axiosInstance
    .get(http_config.BASE_URL + `/api/displayStaff?id=${data}`)
    .then((res) => {
      console.log("********", res)})}, []

  )

  const handleChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });

    setStatus(e.target.name);

    setErrors(Validate(formvalue, status));
  };

  const handleSubmit = (e) => {
    console.log(formvalue);
    e.preventDefault();
    setErrors(Validate(formvalue, status));

    if (
      !errors.staffName &&
      !errors.address &&
      !errors.contact_No &&
      !errors.status &&
      !errors.remarks
    ) {
      axiosInstance
        .post(http_config.BASE_URL + "/api/addStaff", formvalue)
        .then((res) => {
          console.log(res);
        });
    }
  };

  return {
    formvalue,
    handleChange,
    handleSubmit,
    errors,
    status,
  };
}
