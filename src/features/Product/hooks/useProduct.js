import { useEffect, useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import Validate from "../hooks/validate";

const useProduct = () => {
  const [resp,setResp]=useState()
  const [formvalue, setformvalue] = useState({
    productName: "",
    companyName: "",
    size: "",
    colour: "",
    expireyDate: "",
    unit: [],
    equivalent_SI_Value: [],
    costPrice: [],
    sellingPrice: [],
    minimum_Stock_Quantity: "",
    stock_Quality_In_SI_Value: "",
  });

 

  const [unit,setUnit]=useState("");

  const [equivalent_SI_Value, setEquivalent_SI_Value] = useState("");

  const[costPrice, setCostPrice] = useState("");

  const [sellingPrice, setSellingPrice] = useState("");



  useEffect(()=>{
    const unitarray = unit.split(","); 

    const equivalent_SI_ValueArray = equivalent_SI_Value.split(",");
    
    const costPriceArray = costPrice.split(",");

    const sellingPriceArray = sellingPrice.split(",");

  
    setformvalue({...formvalue,"unit":unitarray,
     "equivalent_SI_Value":equivalent_SI_ValueArray,
     "costPrice": costPriceArray,
     "sellingPrice" : sellingPriceArray,

  })
  },[unit, equivalent_SI_Value, costPrice, sellingPrice])

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));


  
  };

  const handleSubmit = (e) => {

console.log("fomrvalue", formvalue)

    e.preventDefault();

    
 axiosInstance.post(
 http_config.BASE_URL + "/api/addProduct",
        formvalue
      ).then((response) => {
        setResp(response)
                
        console.log(response, "formvalue");

      });
    }


  return {
    handleOnChange,
    setformvalue,
    formvalue,
    errors,
    handleSubmit,
    setUnit,
    setEquivalent_SI_Value,
    setCostPrice,
    setSellingPrice,
    resp
  };
};

export default useProduct;
