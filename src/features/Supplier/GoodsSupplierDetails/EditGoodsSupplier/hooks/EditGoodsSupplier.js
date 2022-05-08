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
    _id:""
  });

  const [errors, setErrors] = useState({});


   useEffect(()=> {
     axiosInstance.get(http_config.BASE_URL + `/api/getGoodsSuppliers?id=${data}`).then(res => {

      console.log(res);

     setformvalue({...formvalue, 
      
      "goodsSupplierName" : res.goodsSuppliers[0].GoodsSupplierName,
       
      "address" : res.goodsSuppliers[0].Address,

      "contact_No" : res.goodsSuppliers[0].Contact_No,

      "remarks" : res.goodsSuppliers[0].Remarks,

      "status" : res.goodsSuppliers[0].Status,

      "_id" : res.goodsSuppliers[0]._id,

      "credit_Limit" : res.goodsSuppliers[0].Credit_Limit,
      
     })
      

     }
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
   
    axiosInstance
    .post(http_config.BASE_URL + "/api/updateGoodsSuppliers", formvalue)
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
    fetchData
  };
  



}
