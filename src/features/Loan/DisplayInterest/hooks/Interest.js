import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import interestDetailSlice from '../../../../redux/slice/interestDetailSlice';

const Interest = () => {
    const dispatch = useDispatch();
    const fetchData=() => {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayInterest")
        .then((response) => {
          dispatch(interestDetailSlice.actions.setData(response.interests));
          console.log(response.interests);  
        });
    }

    const deleteHandler = (id) => {
      console.log(id);
      console.log("called");
      axiosInstance
        .post(http_config.BASE_URL + "/api/deletePayInterest", {
          _id: [id],
        })
        .then(() => {
          fetchData();
          alert("Delete Successful")
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);

return {

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

  export {Interest, PageSelect}
