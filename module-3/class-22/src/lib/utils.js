const validator = require('validator');


function validationSignup(data) {
    const { name, email, password } = data;


    if (!name) {
        throw new Error("Name is required");
    } else if (!validator.isEmail(email)) {
        throw new Error("Invalid Email");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("Please use a strong password !");
    }
}


function validationLogin(data) {
    const { email, password } = data;

    if (!validator.isEmail(email)) {
        throw new Error("Invalid Email");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("Password is required");
    }

}

module.exports = {
    validationSignup,
    validationLogin
}


