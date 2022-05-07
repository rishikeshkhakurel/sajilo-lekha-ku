import axios from 'axios';
import React, {useState} from 'react'
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import Validate from "../view/validate";


export default function Principle() {

    const [formvalue, setformvalue] = useState({
        transactionDate:"",
        interestAmount:"",
        transactionMethod:"",
        transactionDetail:"" ,
        remarks: ""
     })
 
 
     const [errors, setErrors] = useState({});
 
     const handleChange = (e)=> {
       e.preventDefault();
       setformvalue({...formvalue, [e.target.name]:e.target.value})
       setErrors(Validate(formvalue));
       
     }
 
     const onSubmit = (e) => {
         e.preventDefault();
         console.log(formvalue);
 
       
         axiosInstance.post(http_config.BASE_URL + "/api/payInterest", formvalue ).then((res)=>{
           console.log(res);
         })
       
         
 
     }
 
   return (
    
    
 {
     formvalue, setformvalue, handleChange, onSubmit, errors
 }
     
   );
 }