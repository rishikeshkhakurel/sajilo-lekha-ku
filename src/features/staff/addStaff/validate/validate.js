const Validate = (formvalue,status)=>{
 


    const errors = {};

    if(!formvalue.staffName){
        errors.staffName = "Name is required";
    }

    if(!formvalue.address){

        errors.address = "Address is required";
    }

  
    if(!formvalue.contact_No){

        errors.contact_No = "Contact is required";
    }
 else  if(formvalue.contact_No.length !=10) {
      errors.contact_No = "Number must be valid"
    }

    if(!formvalue.remarks){
        errors.remarks = "Remarks is required"
    }

   




if(!formvalue.status) {
    errors.status= "Select status";
}

return errors;
}



export { Validate };
