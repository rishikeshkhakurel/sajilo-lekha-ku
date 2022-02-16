import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import useDecodeApiMessage from "../../../common/helper/decodeApiMessage";
import customerSlice from "../../../redux/slice/Customer.Slice";

const useCustomer = () => {
  const dispatch = useDispatch();
  const decoder = useDecodeApiMessage();
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState("");

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
  };

  useEffect(() => {
    axiosInstance.get(http_config.BASE_URL + "/api/displayCustomer").then(
      (resp) => {
        dispatch(customerSlice.actions.setData(resp.customers));
        console.log(resp);
      },
      (err) => {
        if (err) {
          decoder(err);
        }
      }
    );
  }, [dispatch]);

  useEffect(()=>{
    console.log("rerendiring")
  })

  return {
    handleCustomerAdd,
    handleCustomerEdit,
    credit,
    setcredit,
    handleOnChange,
    setformvalue,
    formvalue,
  };
};

export default useCustomer;
