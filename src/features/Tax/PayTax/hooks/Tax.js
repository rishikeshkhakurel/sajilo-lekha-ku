import { useState } from "react";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import Validate from "./validate";


export default function Tax() {

    const [formvalue, setformvalue] = useState({
        transactionDate:"",
        taxAmount:"",
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
 
         if(!errors.transactionDate && !errors.taxAmount  && !errors.transactionDetail) {
       
         axiosInstance.post(http_config.BASE_URL + "/api/payTax", formvalue ).then((res)=>{
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