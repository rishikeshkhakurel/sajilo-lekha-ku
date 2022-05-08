import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import http_config from "../../../../common/config/httpconfig/http_config";
import assetSlice from "../../../../redux/slice/assetSlice";

const Asset =  () => {
  // const dispatch = useDispatch();
  // const fetchData= () => {
  //   axiosInstance.get(http_config.BASE_URL + "/api/displayAsset").then((response) => {
  //       dispatch(assetSlice.actions.setData(response));
  //       console.log(response, "hello worldw3ref");
  //     })
  // }

  const [data, setData] = useState();
  
  console.log(data,"hello world")
useEffect(() => {

  axiosInstance.get(http_config.BASE_URL + "/api/displayAsset").then((response)=>{
    console.log(response,"data")
  setData(response);

  })


},[])
  

return { 

  data
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

export  {Asset, PageSelect};
