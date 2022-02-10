import axios from "axios";
import { useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";

const useCustomer = () => {
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState("");

  const handleCustomerAdd = (e) => {
    e.preventDefault();
    
    setformvalue({ ...formvalue, Allow_Credit: credit});

    axiosInstance.post(http_config.BASE_URL+"/api/addCustomer",formvalue).then((resp)=>{
      console.log(resp)

    })
  };

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  return {
    handleCustomerAdd,
    credit,
    setcredit,
    handleOnChange,
    setformvalue,
    formvalue
  };
};

export default useCustomer;
