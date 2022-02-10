import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import productSlice from "../../../redux/slice/Product.Slice";

const useProduct = () => {
  const dispatch = useDispatch();
  const [formvalue, setformvalue] = useState("");

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/getProduct")
      .then((resp) => {
        console.log("product",resp)
        // dispatch(productSlice.actions.setData(resp.products ));
      });
  }, [dispatch]);

  const handleProductAdd = (e) => {
    e.preventDefault();

    console.log(formvalue);

    axiosInstance
      .post(http_config.BASE_URL + "/api/addProduct", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleProductEdit = (e) => {
    e.preventDefault();

    console.log(formvalue);

    axiosInstance
      .post(http_config.BASE_URL + "/api/updateProduct", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  return {
    handleProductAdd,
    handleProductEdit,
    handleOnChange,
    setformvalue,
    formvalue,
  };
};

export default useProduct;
