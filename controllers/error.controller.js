exports.globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(err.status ?? 500).json({
      message: err.message,
    });
  }

  res.status(err.status ?? 500).json({
    message: err.message,
    stack: err.stack,
  });
};
