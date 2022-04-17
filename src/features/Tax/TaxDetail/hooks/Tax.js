import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import taxSlice from '../../../../redux/slice/tax';

const Tax = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayTax")
        .then((response) => {
          dispatch(taxSlice.actions.setData(response.taxs));
          console.log(response.taxs);
        });
    }, []);
  };

  export default Tax;
