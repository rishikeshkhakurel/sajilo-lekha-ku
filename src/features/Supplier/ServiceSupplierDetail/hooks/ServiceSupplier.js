import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import serviceSupplierSlice from "../../../../redux/slice/ServiceSupplierSlice";


const ServiceSupplierDetails = () => {
    const dispatch = useDispatch();
    const fetchSupplier = ()=> {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayServiceSuppliers")
        .then((response) => {
          dispatch(serviceSupplierSlice.actions.setData(response.serviceSuppliers));
          console.log(response);  
        });
    }


    const deleteHandler = (id) => {
      console.log(id);
      console.log("called");
      axiosInstance
        .post(http_config.BASE_URL + "/api/deleteServiceSuppliers", {
          _id: [id],
        })
        .then(() => {
          fetchSupplier();
          alert("Supplier Detail Deleted")
        });
    };
  
    useEffect(() => {
      fetchSupplier();
    }, []);

    return{
deleteHandler

    }
    
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
  
  

  export {ServiceSupplierDetails, PageSelect};