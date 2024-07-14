const { httpErrorMsg } = require("../constants");

exports.globalErrorHandler = (err, req, res, next) => {
  res.status(err.status ?? 500).json({
      message: !err.status || err.status === 500 ? httpErrorMsg.INTERNAL_SERVICE_ERROR : err.message,
  });
};
