
const Validate = (formvalue)=> {

const errors = {};

if (!formvalue.transactionDate) {
    errors.transactionDate = "Select Date";
}

if (!formvalue.loanAmount){

    errors.loanAmount = "Loan amount is required";
}

if (!formvalue.transactionMethod) {
errors.transactionMethod = " Enter transaction Method ";
}

if (!formvalue.transactionDetail){
    errors.transactionDetail = "Enter transaction details";
}

if (!formvalue.remarks){
    errors.remarks = "Remarks is required";
}

return errors;

}

export default Validate;