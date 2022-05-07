
const Validate = (formvalue)=> {

    const errors = {};
    
    if (!formvalue.transactionDate) {
        errors.transactionDate = "Select Date";
    }
    
    if (!formvalue.taxAmount){
    
        errors.taxAmount = "Tax amount is required";
    }
    

    
    if (!formvalue.transactionDetail){
        errors.transactionDetail = "Enter transaction details";
    }
    
    return errors;
    
    }
    
    export default Validate;