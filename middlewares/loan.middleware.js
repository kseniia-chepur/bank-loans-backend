const { httpErrorMsg } = require("../constants");
const { loanValidation } = require("../utils")

exports.provideLoanData = async (req, res, next) => {
  try {
    const { value, error } = loanValidation.createLoanDataValidator(req.body);
    if (error) {
      throw new Error(400, httpErrorMsg.INVALID_DATA);
    }

    req.body = value;
    next();

  } catch(err) {
    next(err);
  }
}