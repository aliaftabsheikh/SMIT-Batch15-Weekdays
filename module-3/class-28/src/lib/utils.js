const validator = require('validator');
const { cloudinary } = require('./cloudinary');
const streamifier = require('streamifier');


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


const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "ferrari" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};


module.exports = {
    validationSignup,
    validationLogin,
    uploadToCloudinary
}


