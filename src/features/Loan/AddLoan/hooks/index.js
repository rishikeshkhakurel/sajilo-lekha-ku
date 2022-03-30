import React, {useState} from 'react'
import Validate from "../view/validate";
import axios from "axios";
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';

export default function Loan() {

    const [formvalue, setformvalue] = useState({
       transactionDate:"",
       loanAmount:"",
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
        console.log(formvalue,formvalue);

        if(!errors.transactionDate && !errors.loanAmount && !errors.transactionMethod && !errors.transactionDetail) {
      
        axiosInstance.post(http_config.BASE_URL + "/api/addLoan", formvalue ).then((res)=>{
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

