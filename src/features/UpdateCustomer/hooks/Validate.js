const Validate = (formvalue) => {
    const errors = {};
    
    if(!formvalue.customerName){
        errors.customerName = "Name is required";
    }
    
    if (formvalue.contact_No.length !== 10){
        errors.contact_No = "Number is invalid"
    }
    
    else if (!formvalue.contact_No){
        errors.contact_No = "Number is required";
    }
    
    if (!formvalue.address){
        errors.address = "Address is required"
    }
    
    
    if (!formvalue.contractor_Name){
        errors.contractor_Name = "Name is required";
    }
    
    if (!formvalue.contractor_ContactNo){
        errors.contractor_ContactNo = "Phone number is required"
    }
    
    
    if (formvalue.contractor_ContactNo.length !== 10){
        errors.contractor_ContactNo = "Invalid Number"
    }


    if (!formvalue.status){
        errors.status = "Status is required";
    }

    if (!formvalue.remarks){
        errors.remarks = "Remarks is required"
    }

    if (!formvalue.credit_Limit){
        errors.credit_Limit = "Credit Limit is required"
    }
    
    return errors;
    
    
    
    }
    
    export default Validate;