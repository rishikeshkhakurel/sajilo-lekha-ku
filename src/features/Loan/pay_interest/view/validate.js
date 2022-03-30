
const Validate = (formvalue)=> {

    const errors = {};
    
    if (!formvalue.transactionDate) {
        errors.transactionDate = "Select Date";
    }
    
    if (!formvalue.interestAmount){
    
        errors.interestAmount = "Interest Amount is required";
    }
    
    if (!formvalue.transactionMethod) {
    errors.transactionMethod = " Enter transaction Method ";
    }
    
    if (!formvalue.transactionDetail){
        errors.transactionDetail = "Enter transaction details";
    }
    
    return errors;
    
    }
    
    export default Validate;