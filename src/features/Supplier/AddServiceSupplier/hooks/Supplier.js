import React, { useState } from 'react'
import Validate from './validate';

export default function Supplier() {

 
  const [formvalue, setformvalue] = useState({
    serviceSupplierName: "",
    address: "",
    contact_No: "",
    credit_Limit: "",
    status:"",
    remarks:"",
    category:"",
    sub_Category:""

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

   
  };

  return {
    formvalue,
    setformvalue,
    handleChange,
    handleSubmit,
    errors,
  };
  



}
