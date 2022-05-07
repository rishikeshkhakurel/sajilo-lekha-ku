import React, { useState, useEffect } from "react";
import  Validate  from "./validate";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";

export default function Salary() {
  const [formvalue, setformvalue] = useState({
    staffName: "",
    transactionDate: "",
    salaryAmount: "",
    transactionDetail: "",
    remarks: "",
    staffContact_No:"",
    staffAddress:"",
    transactionMethod:""
  });

  

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState();

  const handleChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });

    setStatus(e.target.name);

    setErrors(Validate(formvalue));
  };

  const handleSubmit = (e) => {
    console.log(formvalue);
    e.preventDefault();
    setErrors(Validate(formvalue));

    if (
      !errors.staffName &&
      !errors.transactionDetail &&
      !errors.staffContact_No &&
      !errors.salaryAmount &&
      !errors.remarks &&
      !errors.transactionDate &&
      !errors.staffAddress
    ) {
      axiosInstance
        .post(http_config.BASE_URL + "/api/payStaffSalary", formvalue)
        .then((res) => {
          console.log(res);
          alert("Paid Successfully")
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
