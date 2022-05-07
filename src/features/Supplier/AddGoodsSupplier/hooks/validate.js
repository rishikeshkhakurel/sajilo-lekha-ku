
const Validate = (formvalue)=>{

const errors = [];

if(!formvalue.goodsSupplierName){

    errors.goodsSupplierName="Name is required";
}

if(!formvalue.address){

    errors.address="Address is required";
}

if(!formvalue.contact_No){

    errors.contact_No="Contact no is required";
}

if(formvalue.contact_No.length !=10){

    errors.contact_No="Invalid number"
}

if(!formvalue.credit_Limit){

    errors.credit_Limit="Credit limit is required";
}

if(!formvalue.status){

    errors.status="Status is required";
}

if(!formvalue.remarks){

    errors.remarks="Remarks is required";
}

return errors;




}

export default Validate;