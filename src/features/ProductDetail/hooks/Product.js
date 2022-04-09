import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../../../common/helper/axiosInterceptor.js";
import http_config from "../../../common/config/httpconfig/http_config.js";
import productSlice from "../../../redux/slice/ProductSlice";


const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
     axiosInstance
      .get(http_config.BASE_URL + "/api/displayProduct")
      .then((response) => {
        dispatch(productSlice.actions.setData(response.products));
        console.log(response.products);
      });
  }, []);
};

export default Product;


