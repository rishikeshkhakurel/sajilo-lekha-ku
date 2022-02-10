import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import customerSlice from "../../../redux/slice/Customer.Slice";

const useCustomer = () => {
  const dispatch = useDispatch();
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState("");

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

  const handleOnChange = (e) => {
    setformvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  return {
    handleCustomerAdd,
    credit,
    setcredit,
    handleOnChange,
    setformvalue,
    formvalue,
  };
};

export default useCustomer;
