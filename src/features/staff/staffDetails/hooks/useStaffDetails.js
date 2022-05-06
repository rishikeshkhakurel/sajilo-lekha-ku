import axiosInstance from "../../../../common/helper/axiosInterceptor.js";
import http_config from "../../../../common/config/httpconfig/http_config";
import { useDispatch } from "react-redux";
import staffSlice from "../../../../redux/slice/staffSlice.js";
import { useEffect, useState } from "react";

const useStaffDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get(http_config.BASE_URL + "/api/displayStaff").then((response) => {
        dispatch(staffSlice.actions.setData(response.staffs));
        console.log(response.staffs);
      });
  }, []);
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

export  {useStaffDetails, PageSelect};
