import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import http_config from '../../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../../common/helper/axiosInterceptor';
import Validate from './validate';

export default function EditSupplier() {

    const[ fetchData, setFetchData ]  = useState({});

    const location = useLocation();

    const data = location.state;
    
    console.log(data);
  

 
  const [formvalue, setformvalue] = useState();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  useEffect(()=> {
    axiosInstance.get(http_config.BASE_URL + `/api/getServiceSuppliers?id=${data}`).then(res => setformvalue(res.serviceSuppliers[0])
    );
    console.log("hll")
   } , []);
   




  const handleSubmit = (e) => {

    setformvalue({...formvalue, [e.target.name]: e.target.value})
    e.preventDefault();
    console.log(formvalue);

    
    
   
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
