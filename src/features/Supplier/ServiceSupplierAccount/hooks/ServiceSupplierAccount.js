import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";

const ServiceAccount = () => {
  const [fetchData, setFetchData] = useState({});

  const location = useLocation();

  const data = location.state;

  console.log(data);

  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + `/api/serviceSuppliersPersonalAccount?id=${data}`)
      .then((res) => setFetchData(res));
  }, []);

  console.log(fetchData, "hello");

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
    fetchData,
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
  };
};

export default ServiceAccount;
