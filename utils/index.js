const clientValidation = require('./validation/client.validation');
const loanTypeValidation = require('./validation/loanType.validation');
const loanValidation = require('./validation/loan.validation');
const authValidation = require('./validation/auth.validation');
const HttpError = require('./httpError');

module.exports = {
  clientValidation,
  loanTypeValidation,
  loanValidation,
  authValidation,
  HttpError,
};

