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

          productName: res.product[0].ProductName,

          companyName: res.product[0].CompanyName,

          size: res.product[0].Size,

          colour: res.product[0].Colour,

          costPrice: res.product[0].CostPrice,

          expireyDate: res.product[0].ExpireyDate,

          stock_Quality_In_SI_Value: res.product[0].Stock_Quality_In_SI_Value,

          unit: res.product[0].Unit,

          minimum_Stock_Quantity: res.product[0].Minimum_Stock_Quantity,

          sellingPrice: res.product[0].SellingPrice,

          equivalent_SI_Value: res.product[0].Equivalent_SI_Value,
        });
      });
  }, []);

  console.log(formvalue)

  const handleOnChange = (e) => {
    if (
      e.target.name === "unit" ||
      e.target.name === "equivalent_SI_Value" ||
      e.target.name === "costPrice" ||
      e.target.name === "sellingPrice"
    ) {
      const arr = e.target.value.split(",");
      setformvalue({ ...formvalue, [e.target.name]: arr });
    } else {
      setformvalue({ ...formvalue, [e.target.name]: e.target.value });
      setErrors(Validate(formvalue));
    }

    // const unitString = formvalue.unit.toString();

    // const unitArray = unitString.split(",");

    // const costString = formvalue.costPrice.toString();

    // const costArray = costString.split(",");

    // const equivalentString = formvalue.equivalent_SI_Value.toString();

    // const equivalentArray = equivalentString.split(",");

    // const sellingPriceString = formvalue.sellingPrice.toString();

    // const sellingPriceArray = sellingPriceString.split(",");

    // setformvalue({
    //   ...formvalue,

    //   unit: unitArray,
    // });
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
