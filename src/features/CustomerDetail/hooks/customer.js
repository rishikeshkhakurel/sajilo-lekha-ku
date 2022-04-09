import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import http_config from '../../../common/config/httpconfig/http_config';
import axiosInstance from '../../../common/helper/axiosInterceptor';
import customerSlice from "../../../redux/slice/Customer.Slice"

const Customer = ()=>{

    const dispatch = useDispatch();
    useEffect(() => {
        axiosInstance
      .get(http_config.BASE_URL + "/api/displayCustomer")
      .then((response) => {
        dispatch(customerSlice.actions.setData(response.customers));
        console.log(response.customers)} ) }
    ,[] )
      }

      export default Customer;