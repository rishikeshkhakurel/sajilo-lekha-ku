import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import loanSlice from "../../../../redux/slice/loanSlice.js";


    const Loan = () => {
        const dispatch = useDispatch();
        useEffect(() => {
           axiosInstance
            .get(http_config.BASE_URL + "/api/displayLoan")
            .then((response) => {
              dispatch(loanSlice.actions.setData(response.loans));
              console.log(response.loans);  
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

 export {Loan, PageSelect};