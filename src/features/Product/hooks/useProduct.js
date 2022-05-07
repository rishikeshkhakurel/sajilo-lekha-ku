import { useEffect, useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import Validate from "../hooks/validate";

const useProduct = () => {
  const [formvalue, setformvalue] = useState({
    productName: "",
    companyName: "",
    size: "",
    colour: "",
    expireyDate: "",
    unit: "",
    equivalent_SI_Value: "",
    costPrice: "",
    sellingPrice: "",
    minimum_Stock_Quantity: "",
    stock_Quality_In_SI_Value: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);

    if (
      !errors.size &&
      !errors.colour &&
      !errors.expireyDate &&
      !errors.unit &&
      !errors.equivalent_SI_Value &&
      !errors.costPrice &&
      !errors.sellingPrice &&
      !errors.minimum_Stock_Quantity &&
      !errors.stock_Quality_In_SI_Value
    ) {
      axiosInstance.BASE_URL.post(
       http_config.BASE_URL + "/api/addProduct",
        formvalue
      ).then((response) => {
        console.log(response, "formvalue");
      });
    }
  };

  return {
    handleOnChange,
    setformvalue,
    formvalue,
    errors,
    handleSubmit,
  };
};

export default useProduct;
