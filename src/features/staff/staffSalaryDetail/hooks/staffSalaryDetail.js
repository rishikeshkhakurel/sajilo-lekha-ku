import { useEffect, useState } from "react";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";


const StaffSalary = () => {

    const [data, setData] = useState();


  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/getStaffSalary")
      .then((response) => {
        setData(response);
        console.log(response, "sfasdfsd"); 
      });
  }, []);


return {

    data
}


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
export { StaffSalary, Pagination };
