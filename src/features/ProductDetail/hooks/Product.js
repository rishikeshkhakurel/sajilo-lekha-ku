import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
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

const Pagination = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  

  return {
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
  };
};
export { Product, Pagination };
