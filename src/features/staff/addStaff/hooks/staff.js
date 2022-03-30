import React, {useState,useEffect} from 'react';
import {Validate} from "../validate/validate";
import http_config from "../../../../common/config/httpconfig/http_config";
import axios from "axios";


export default function Staff() {

    const[formvalue,setformvalue] = useState({
        staffName:"",
        address:"",
        contact_No:"",
        status:"",
        remarks:"",
        
    });

   

    const [errors,setErrors] = useState({});

    const [status, setStatus]= useState();

const handleChange= (e)=> {
    
    setformvalue({...formvalue, [e.target.name]:e.target.value});

    setStatus( e.target.name);
    

    setErrors(Validate(formvalue,status));
    
    
}

const handleSubmit= (e)=> {
    console.log(formvalue);
    e.preventDefault();
    setErrors(Validate(formvalue,status));

    if( !errors.staffName && !errors.address &&!errors.contact_No && !errors.status && !errors.remarks) {
        axios.post(http_config.BASE_URL + "/api/addStaff", formvalue).then((res)=>{
        console.log(res);
        });
    }
    
}

return {
    formvalue,
    handleChange,
    handleSubmit,
    errors,
    status

};

}
