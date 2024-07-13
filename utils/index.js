const clientValidation = require('./client.validation');
const loanTypeValidation = require('./loanType.validation');
const loanValidation = require('./loan.validation');
const HttpError = require('./httpError');

module.exports = {
  clientValidation,
  loanTypeValidation,
  loanValidation,
  HttpError,
};

