exports.globalErrorHandler = (err, req, res, next) => {
  res.status(err.status ?? 500).json({
      message: !err.status || err.status === 500 ? 'Internal server error' : err.message,
  });
};
