const { GeneralError, BadRequest } = require('../service/error');
const config = require("../service/config");

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.statusCode !== "" ? err.statusCode : err.getCode()).json({
      status: config.ERROR,
      code: err.statusCode !== "" ? err.statusCode : err.getCode(),
      message: err.message,
      result: err.result !== "" ? err.result : undefined,
    });
  }

  return res.status(config.HTTP_SERVER_ERROR).json({
    status: config.ERROR,
    code: err.statusCode !== "" ? err.statusCode : config.HTTP_SERVER_ERROR,
    message: err.message,
  });
};

const handleJoiErrors = (err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    const customErrorResponse = {};
      if (err.error.details.length !== 0) {
          err.error.details.forEach(item => {
              customErrorResponse[`${item.context.key}`] = {
                  message: item.message,
                  context: item.context.label,
                  type: item.type
              } 
        })
    }
    next(new BadRequest("Validation Error", customErrorResponse));
  } else {
    next(err);
  }
};

module.exports = { handleErrors, handleJoiErrors };