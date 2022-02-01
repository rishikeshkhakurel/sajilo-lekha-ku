
const loginValidate = (loginValue) => {

    const loginError = {};

    if(!loginValue.username){
        loginError.username="Username is required";
    }
    if(!loginValue.password){
        loginError.password="Password is required"
    }
    return loginError;
}

export default loginValidate;