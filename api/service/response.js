  
const config = require('./config');


//Handling Responce coming from database
class GeneralResponse { 
    constructor(message,result,statusCode = "") { 
        this.message = message;
        this.statusCode = statusCode == "" ? config.HTTP_SUCCESS : statusCode;
        this.result = result;
    }
}

module.exports = {
    GeneralResponse,
}