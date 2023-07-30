
const errorHandler = (err, req, res, next) => {
    console.log(err)
    let status = 500;
    let message = "Internal Server Error";
  
    switch (err.name) {
      case "SequelizeValidationError":
      case "SequelizeUniqueConstraintError":
        status = 400;
        message = err.errors[0].message;
        break;
      case "EmailIsRequired":
        status = 400;
        message = "Email is Required!";  
        break;
      case "PasswordIsRequired":
        status = 400;
        message = "Password is Required!";   
        break;
      case "WrongEmailOrPassword":
        status = 401;
        message = "Invalid Email or Password";  
        break;
    }
  
    res.status(status).json( { message } );
  };
  
  module.exports = errorHandler;
  