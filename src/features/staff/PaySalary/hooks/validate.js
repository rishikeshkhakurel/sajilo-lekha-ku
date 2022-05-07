
const Validate = (formvalue) => {

const errors = {}; 

if(!formvalue.staffName){
    errors.staffName= " Staff name is required"
}

if(!formvalue.transactionDate){
    errors.transactionDate= "Transaction date is required"
}

if(!formvalue.salaryAmount){
    errors.salaryAmount="Salary Amount is required";
}

if(!formvalue.remarks){
    errors.remarks="Remarks is required"
}

if(!formvalue.transactionDetail){
    errors.transactionDetail="Transaction detail is required"
}

if(!formvalue.staffContact_No){
    errors.staffContact_No="Contact no is required"
} 

else if(formvalue.staffContact_No.length!=10){

    errors.staffContact_No= "Invalid number"
}

if(!formvalue.staffAddress){
    errors.staffAddress="Staff Address is required"
}




return  errors ;


}

export default Validate;