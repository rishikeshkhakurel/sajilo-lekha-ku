import React, {useState} from 'react'
import Validate from "../view/validate";


export default function Principle() {

    const [formvalue, setformvalue] = useState({
        transactionDate:"",
        interestAmount:"",
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
 
        //  if(!errors.transactionDate && !errors.loanAmount && !errors.transactionMethod && !errors.transactionDetail) {
       
        //  axios.post(http_config.BASE_URL + "/api/addLoan", formvalue ).then((res)=>{
        //    console.log(res);
        //  })
       
        //  }
 
     }
 
   return (
    
    
 {
     formvalue, setformvalue, handleChange, onSubmit, errors
 }
     
   );
 }