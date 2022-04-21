import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import goodsSupplierDetail from "../../../../redux/slice/GoodsSupplierDetail";

const GoodsSupplierDet = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayGoodsSuppliers")
        .then((response) => {
          dispatch(goodsSupplierDetail.actions.setData(response.goodsSuppliers));
          console.log(response.goodsSuppliers);  
        });
    }, [dispatch]);
  };


  const PageSelect = () => {
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
  }
   
  export {PageSelect};

  export default GoodsSupplierDet;
