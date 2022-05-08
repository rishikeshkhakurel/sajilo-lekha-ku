import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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
    _id:""
  });

  const [errors, setErrors] = useState({});

  const location = useLocation();

  const data = location.state;

  console.log(data);

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/getCustomer?id=${data}`)
      .then((res) => {
        console.log(res, "formvlaue");

        setformvalue({
          ...formvalue,
           
          customerName: res.customer[0].CustomerName,
          contact_No: res.customer[0].Contact_No,
          address: res.customer[0].Address,
          contractor_Name:res.customer[0].Contractor_Name,
          contractor_ContactNo: res.customer[0].Contact_No,
          credit_Limit: res.customer[0].Credit_Limit,
          status: res.customer[0].Status,
          allow_Credit: res.customer[0].Allow_Credit,
          remarks: res.customer[0].Remarks,
          _id:res.customer[0]._id
           

        });
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setformvalue({ ...formvalue, allow_Credit: credit });
    console.log(formvalue);

    if (
      !errors.customerName &&
      !errors.contact_No &&
      !errors.address &&
      !errors.contractor_Name &&
      !errors.contractor_ContactNo &&
      !errors.status &&
      !errors.remarks
    ) {
      axiosInstance
        .post(http_config.BASE_URL + "/api/updateCustomer", formvalue)
        .then((resp) => {
          console.log(resp);
          alert("Succefully Update")
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
    setformvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
      allow_Credit: credit,
    });

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
    handleSubmit,
  };
};

export default useCustomer;
