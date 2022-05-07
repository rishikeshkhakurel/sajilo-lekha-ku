import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import goodsSupplierDetail from "../../../../redux/slice/GoodsSupplierDetail";

const PageSelect = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const fetchSupplier = () => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/displayGoodsSuppliers")
      .then((response) => {
        dispatch(goodsSupplierDetail.actions.setData(response.goodsSuppliers));
      });
  };

  const deleteHandler = (id) => {
    console.log(id);
    console.log("called");
    axiosInstance
      .post(http_config.BASE_URL + "/api/deleteGoodsSuppliers", {
        _id: [id],
      })
      .then(() => {
        fetchSupplier();
      });
  };

  useEffect(() => {
    fetchSupplier();
  }, []);

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
    deleteHandler,
  };
};

export default PageSelect;
