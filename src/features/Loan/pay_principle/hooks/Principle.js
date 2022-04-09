import axios from 'axios';
import React, {useState} from 'react'
import http_config from '../../../../common/config/httpconfig/http_config';
import Validate from "../hooks/validate";

export default function Principle() {

    const [formvalue, setformvalue] = useState({
        transactionDate:"",
        principleAmount:"",
        transactionMethod:"",
        transactionDetail:"" 
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
 
         if(!errors.transactionDate && !errors.principleAmount && !errors.transactionMethod && !errors.transactionDetail) {
       
         axios.post(http_config.BASE_URL + "/api/payPrinciple", formvalue ).then((res)=>{
           console.log(res);
         })
       
         }
 
     }
 
   return (
    
    
 {
     formvalue, setformvalue, handleChange, onSubmit, errors
 }
     
   );
 }