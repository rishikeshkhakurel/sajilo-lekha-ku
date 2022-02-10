import { useState } from "react";

const useCustomer = () => {
  const [credit, setcredit] = useState(true);
  const [formvalue, setformvalue] = useState("");

  const handleCustomerAdd = (e) => {
    e.preventDefault();
    console.log(formvalue);
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
    formvalue
  };
};

export default useCustomer;
