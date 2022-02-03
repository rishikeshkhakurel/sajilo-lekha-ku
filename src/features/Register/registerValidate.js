
const validate = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(!values.userName) {
   errors.userName = "Username is required";
    }

    if(!values.email) {
        errors.email = "Email is required";
         }
         
         else if (!regex.test(values.email)) {
             errors.email = "Invalid email address";
         }
     
         if(!values.password){
             errors.password = "Password is required";
         }
         else if(values.password.length < 6) {
             errors.password = "Password must be more than 6 characters";
         }

         if(!values.confirmPassword){
             errors.confirmPassword = "Confirm password is required";
         }

         else if(values.confirmPassword !== values.password) {
             errors.confirmPassword="Password don't match"
         }

          if(!values.contact){
             errors.contact="Phone number is required"
         }
         else if(values.contact.length !== 10){
             errors.contact="Invalid number"
         }
    return errors;
}



export  { validate } ;