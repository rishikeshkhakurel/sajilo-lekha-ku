
const Validate = (formvalue) => {

const errors = {}; 

if(!formvalue.productName){
    errors.productName= " Product name is required"
}

if(!formvalue.companyName){
    errors.companyName= "company name is required"
}

if(!formvalue.size){
    errors.size="size is required";
}

if(!formvalue.colour){
    errors.colour="colour is required"
}

if(!formvalue.expireyDate){
    errors.expireyDate="Expirey date is required"
}

if(!formvalue.unit){
    errors.unit="Unit is required"
}

if(!formvalue.equivalent_SI_Value){
    errors.equivalent_SI_Value = "required SI value"
}

if(!formvalue.costPrice){
    errors.costPrice = "CostPrice is required"
}

if(!formvalue.sellingPrice){
    errors.sellingPrice = "Selling Price is required"
}

if(!formvalue.minimum_Stock_Quantity){
    errors.minimum_Stock_Quantity="minimum stock quantity is required"
}

if(!formvalue.stock_Quality_In_SI_Value){
  errors.stock_Quality_In_SI_Value= "Stock quantity is required"
}

return  errors ;


}

export default Validate;