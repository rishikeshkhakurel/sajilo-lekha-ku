
const Validate = (formvalue)=>{

    const errors = [];
    
    if(!formvalue.assetCategory){
    
        errors.assetCategory="Asset Category is required";
    }
    
    if(!formvalue.transactionDetail){
    
        errors.transactionDetail="Transaction Detail is required";
    }
    
    if(!formvalue.transactionDate){
    
        errors.transactionDate="Transaction Date no is required";
    }
    
   

    if(!formvalue.transactionMethod){
    
        errors.transactionMethod="Transaction Method is required";
    }

    if(!formvalue.assetValue){
    
        errors.assetValue="Asset  Value is required";
    }


    if(!formvalue.remarks){
    
        errors.remarks="Remarks value is required";
    }

  

    

    
    
    return errors;
    
    
    
    
    }
    
    export default Validate;