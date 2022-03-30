import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import customerSlice from "../../../redux/slice/Customer.Slice";
import Validate from "../hooks/validate";

const useCustomer = () => {
  const dispatch = useDispatch();
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState("");
  const [errors, setErrors] = useState({});
  const [getdata,setgetdata] = useState({});



  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/displayCustomer")
      .then((resp) => {
        dispatch(customerSlice.actions.setData(resp.customers ));
      });
  }, [dispatch]);

  const handleCustomerAdd = (e) => {
    e.preventDefault();

    setformvalue({ ...formvalue, Allow_Credit: credit });
    console.log(formvalue);

    

    axiosInstance
      .post(http_config.BASE_URL + "/api/addCustomer", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleCustomerEdit = (e) => {
    e.preventDefault();

    setformvalue({ ...formvalue, Allow_Credit: credit });
    console.log(formvalue);

    axiosInstance
      .post(http_config.BASE_URL + "/api/updateCustomer", formvalue)
      .then((resp) => {
        console.log(resp);
      });
  };

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
  const data = formvalue;
  console.log(data);
    
    
  };


  


  return {
    handleCustomerAdd,
    handleCustomerEdit,
    credit,
    setcredit,
    handleOnChange,
    setformvalue,
    formvalue,
    errors,
    setErrors,
    getdata,
    
  };
};

export default useCustomer;
