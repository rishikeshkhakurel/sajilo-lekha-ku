import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import http_config from '../../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../../common/helper/axiosInterceptor';
import interestDetailSlice from '../../../../redux/slice/interestDetailSlice';

const Interest = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       axiosInstance
        .get(http_config.BASE_URL + "/api/displayInterest")
        .then((response) => {
          dispatch(interestDetailSlice.actions.setData(response.interests));
          console.log(response.interests);  
        });
    }, []);
  };

  export default Interest;
