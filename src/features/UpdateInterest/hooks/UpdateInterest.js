import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import Validate from "./validate";

export default function InterestUpdate() {
  const [formvalue, setformvalue] = useState({
    transactionDate: "",
    interestAmount: "",
    transactionMethod: "",
    transactionDetail: "",
    remarks: "",
    _id: "",
  });

  const location = useLocation();

  const data = location.state;

  console.log(data, "lasd");

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/getInterest?id=${data}`)
      .then((res) => {
        console.log("********", res);

        setformvalue({
          ...formvalue,

          transactionDate: res.interest[0].TransactionDate,

          interestAmount: res.interest[0].InterestAmount,

          transactionMethod: res.interest[0].TransactionMethod,

          transactionDetail: res.interest[0].TransactionDetail,

          remarks: res.interest[0].Remarks,

          _id: res.interest[0]._id,
        });
      });
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);
   
    
      axiosInstance.post(http_config.BASE_URL + "/api/updatePayInterest", formvalue)
        .then((res) => {
          console.log("********", res);
        });


  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    onSubmit,
    errors,
  };
}
