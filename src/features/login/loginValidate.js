
const loginValidate = (loginValue) => {

    const loginError = {};

    if(!loginValue.userName){
        loginError.userName="Username is required";
    }
    if(!loginValue.password){
        loginError.password="Password is required"
    }
    return loginError;
}

export default loginValidate;