import React, { useState } from "react";

const AddTax = () => {
  const [addTax, updateAddTax] = useState({
    addDate: "",
    addAmount: "",
  });

  const [payTax, updatePayTax] = useState({
    addDate: "",
    payAmount: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    updateAddTax({ ...addTax, [e.target.name]: e.target.value });
    
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    updatePayTax({ ...payTax, [e.target.name]: e.target.value });
    
  };

  const  onSubmit = (e) => {
    e.preventDefault();
    const addTaxValue = addTax;
    
    
  };

  

  return {handleChange, handleOnChange, onSubmit};
};

export default AddTax;
