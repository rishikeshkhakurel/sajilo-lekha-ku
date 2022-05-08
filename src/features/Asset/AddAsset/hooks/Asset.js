import React, { useState } from 'react'
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import Validate from './validate';

export default function Asset() {

 
  const [formvalue, setformvalue] = useState({
    assetCategory: "",
    transactionDetail: "",
    transactionMethod: "",
      transactionDate: "",
      assetValue:"",
      remarks:""
   

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);
    

    axiosInstance.post(http_config.BASE_URL + "/api/addAsset", formvalue ).then((res)=>{
      console.log(res);
      alert("Successfully Added")
    })
   
  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    handleSubmit,
    errors,
  };
  



}
