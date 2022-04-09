import React, { useEffect } from 'react'
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
      
    

 export default Loan;