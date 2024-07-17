const { httpErrorMsg } = require('../constants');
const { loanService } = require('../services');
const { loanValidation, HttpError } = require('../utils');

exports.handleCreateLoan = async (req, res, next) => {
  try {
    const { value, error } = loanValidation.createLoanDataValidator(req.body);

    if (error) {
      throw new HttpError(400, httpErrorMsg.INVALID_DATA);
    }

    req.body = value;
    next();
  } catch (err) {
    next(err);
  }
};

exports.validateLoanId = async (req, res, next) => {
  try {
    const { id } = req.params;

    await loanService.checkLoanExistsById(id);

    next();
  } catch (err) {
    next(err);
  }
};

exports.handleUpdateLoan = async (req, res, next) => {
  try {
    const { value, error } = loanValidation.updateLoanDataValidator(req.body);

    if (error) {
      throw new HttpError(400, httpErrorMsg.INVALID_DATA);
    }

    req.body = value;
    next();
  } catch (err) {
    next(err);
  }
};
