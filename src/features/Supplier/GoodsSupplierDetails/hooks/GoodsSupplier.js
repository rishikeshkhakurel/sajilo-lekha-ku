import { useEffect } from "react";
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

  export default GoodsSupplierDet;
