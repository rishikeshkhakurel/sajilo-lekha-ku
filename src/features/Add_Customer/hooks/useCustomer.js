import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import Validate from "./Validate";
const useCustomer = () => {
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState({
    customerName: "",
    contact_No: "",
    address: "",
    contractor_Name: "",
    contractor_ContactNo: "",
    credit_Limit: "",
    status: "",
    allow_Credit: "",
    remarks: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setformvalue({ ...formvalue, allow_Credit: credit });
    console.log(formvalue);


    if(!errors.customerName && !errors.contact_No && !errors.address && !errors.contractor_Name && !errors.contractor_ContactNo && !errors.status && !errors.remarks ){

    axiosInstance
      .post(http_config.BASE_URL + "/api/addCustomer", formvalue)
      .then((resp) => {
        console.log(resp);
      });
    }



  };

  // const handleCustomerEdit = (e) => {
  //   e.preventDefault();

  //   setformvalue({ ...formvalue, Allow_Credit: credit });
  //   console.log(formvalue);

  // axiosInstance
  //   .post(http_config.BASE_URL + "/api/updateCustomer", formvalue)
  //   .then((resp) => {
  //     console.log(resp);
  //   });

  const handleOnChange = (e) => {
    e.preventDefault();
    setformvalue({ ...formvalue, [e.target.name]: e.target.value, allow_Credit:credit });

    setErrors(Validate(formvalue));

    
  };

  useEffect(() => {
    console.log("rerendiring");
  });

  return {
    credit,
    setcredit,
    handleOnChange,
    setformvalue,
    formvalue,
    errors,
    setErrors,
    handleSubmit
  };
};

export default useCustomer;
