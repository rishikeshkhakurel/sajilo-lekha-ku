import { useEffect } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import serviceSupplierSlice from "../../../../redux/slice/ServiceSupplierSlice";


const ServiceSupplierDet = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayServiceSuppliers")
        .then((response) => {
          dispatch(serviceSupplierSlice.actions.setData(response.serviceSuppliers));
          console.log(response);  
        });
    }, [dispatch]);
  };

  export default ServiceSupplierDet;