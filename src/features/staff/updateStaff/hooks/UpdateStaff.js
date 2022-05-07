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
    _id: "",
  });

  const location = useLocation();

  const data = location.state;

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState();

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/displayStaff?id=${data}`)
      .then((res) => {
        console.log("********", res);
        setformvalue({
          ...formvalue,
          staffName: res.staffs[0].StaffName,
          address: res.staffs[0].Address,
          contact_No: res.staffs[0].Contact_No,
          status: res.staffs[0].Status,
          remarks: res.staffs[0].Remarks,
          _id: res.staffs[0]._id,
        });
      });
  }, []);

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
        .post(http_config.BASE_URL + "/api/updateStaff", formvalue)
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
