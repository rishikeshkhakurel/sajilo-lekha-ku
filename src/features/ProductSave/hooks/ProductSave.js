import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
    unit: [],
    equivalent_SI_Value: [],
    costPrice: [],
    sellingPrice: [],
    minimum_Stock_Quantity: "",
    stock_Quality_In_SI_Value: "",
    _id: "",
  });

  

  const [errors, setErrors] = useState({});

  const location = useLocation();

  const data = location.state;

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/getProduct?id=${data}`)
      .then((res) => {
        setformvalue({
          ...formvalue,

          productName: res.product.ProductName,

          companyName: res.product.CompanyName,

          size: res.product.Size,

          colour: res.product.Colour,

          costPrice: res.product.CostPrice,

          expireyDate: res.product.ExpireyDate,

          stock_Quality_In_SI_Value: res.product.Stock_Quality_In_SI_Value,

          "unit": res.product.Unit,

          minimum_Stock_Quantity: res.product.Minimum_Stock_Quantity,

          sellingPrice: res.product.SellingPrice,

          equivalent_SI_Value: res.product.Equivalent_SI_Value,
        });
      });
  }, []);

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    setErrors(Validate(formvalue));

    console.log("hello world");

    const unitString = formvalue.unit.toString();

    console.log(unitString);

    const unitArray = unitString.split(",");

    console.log(unitArray);

    const costString = formvalue.costPrice.toString();

    const costArray = costString.split(",");

    const equivalentString = formvalue.equivalent_SI_Value.toString();

    const equivalentArray = equivalentString.split(",");
 

  const sellingPriceString = formvalue.sellingPrice.toString();

  const sellingPriceArray = sellingPriceString.split(",");

 setformvalue({ ...formvalue, 

  unit : unitArray

})

};
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", formvalue);

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
        console.log(response);
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
