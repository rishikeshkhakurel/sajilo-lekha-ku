import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import http_config from "../../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../../common/helper/axiosInterceptor";
import Validate from "./validate";

export default function EditSupplier() {
  const [fetchData, setFetchData] = useState({});

  const location = useLocation();

  const data = location.state;

  console.log(data);

  const [formvalue, setformvalue] = useState({
    serviceSupplierName: "",
    address: "",
    contact_No: "",
    credit_Limit: "",
    status: "",
    remarks: "",
    category: "",
    _id:""
    // Sub_Category: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/getServiceSuppliers?id=${data}`)
      .then((res) => {
        console.log("********", res.serviceSuppliers[0]);
        setformvalue({
          ...formvalue,
          "serviceSupplierName": res.serviceSuppliers[0].ServiceSupplierName,
          "address": res.serviceSuppliers[0].Address,
          "contact_No": res.serviceSuppliers[0].Contact_No,
          "credit_Limit": res.serviceSuppliers[0].Credit_Limit,
          "status": res.serviceSuppliers[0].Status,

          "remarks": res.serviceSuppliers[0].Remarks,
          "category": res.serviceSuppliers[0].Category,
          "_id": res.serviceSuppliers[0]._id
        });
      });
  }, []);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    console.log(formvalue, "disney");

    axiosInstance
      .post(http_config.BASE_URL + "/api/updateServiceSuppliers", formvalue)
      .then((res) => {
        console.log(res, "hellowr");
      });
  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    handleSubmit,
    errors,
  };
}
