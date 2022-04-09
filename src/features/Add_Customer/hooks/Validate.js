const Validate = (getdata) => {
    const errors = {};
    
    if(!getdata.CustomerName){
        errors.CustomerName = "Name is required";
    }
    
    if (getdata.Contact_No.length !== 10){
        errors.Contact_No = "Number is invalid"
    }
    
    else if (!getdata.Contact_No){
        errors.Contact_No = "Number is required";
    }
    
    if (!getdata.Address){
        errors.Address = "Address is required"
    }
    
    
    if (!getdata.Contractor_Name){
        errors.Contractor_Name = "Name is required";
    }
    
    if (!getdata.Contractor_ContactNo){
        errors.Contractor_ContactNo = "Phone number is required"
    }
    
    
    if (getdata.Contractor_ContactNo.length !== 10){
        errors.Contractor_ContactNo = "Phone number is required"
    }
    
    return errors;
    
    
    }
    
    export default Validate;