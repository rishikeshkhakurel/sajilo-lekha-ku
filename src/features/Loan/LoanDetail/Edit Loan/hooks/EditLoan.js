import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import http_config from "../../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../../common/helper/axiosInterceptor";
import Validate from "../view/validate";

export default function EditLoan() {
  const [formvalue, setformvalue] = useState({
    transactionDate: "",
    loanAmount: "",
    transactionMethod: "",
    transactionDetail: "",
    remarks:"", 
    _id: ""
  });

  const location = useLocation();

  const data = location.state;

  console.log(data, "232323");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/updateAddLoan?id=${data}`)
      .then((res) => {
        console.log("********",res);
        
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);

 
  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    onSubmit,
    errors,
  };
}
