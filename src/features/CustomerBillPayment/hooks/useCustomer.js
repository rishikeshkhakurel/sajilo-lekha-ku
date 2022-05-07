import { useEffect, useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";

const useCustomer = () => {
  const [Customer,setCustomer]=useState();
  const [Product, setProduct]=useState();

  useEffect(()=>{
    const CustomerRequestHandler = async () => {
      await axiosInstance.get(http_config.BASE_URL + `/api/displayCustomer`).then(
        (data) => {
          setCustomer(data?.customers);
        }
      );
    };
  
    CustomerRequestHandler()

    const ProductRequestHandler = async () => {
      await axiosInstance.get(http_config.BASE_URL + `/api/displayProduct`).then(
        (data) => {
          setProduct(data?.products);
        }
      );
    };

    ProductRequestHandler()

  },[])


  return { Customer, Product };
};

export default useCustomer;
