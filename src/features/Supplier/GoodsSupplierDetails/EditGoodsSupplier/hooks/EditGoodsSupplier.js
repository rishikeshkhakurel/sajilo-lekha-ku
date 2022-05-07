import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import http_config from '../../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../../common/helper/axiosInterceptor';
import Validate from './validate';

export default function GoodsSupplier() {

    const[ fetchData, setFetchData ]  = useState({});

    const location = useLocation();

    const data = location.state;
    
    console.log(data);
  

 
  const [formvalue, setformvalue] = useState({
    goodsSupplierName: "",
    address: "",
    contact_No: "",
    credit_Limit: "",
    status:"",
    remarks:"",
  });

  const [errors, setErrors] = useState({});


   useEffect(()=> {
     axiosInstance.get(http_config.BASE_URL + `/api/getGoodsSuppliers?id=${data}`).then(res => setFetchData(res)
     )
    } , []);

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);

    

//      if(!errors.goodsSupplierName || errors.address || errors.contact_NO || errors.credit_Limit ||errors.status || errors.remarks){
//     axiosInstance.post(http_config.BASE_URL + "/api/addGoodsSuppliers", formvalue).then(res => {
//   console.log(res, "post")
//     });
//   }
   
  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    handleSubmit,
    errors,
    fetchData
  };
  



}
