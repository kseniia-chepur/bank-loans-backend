const { loanValidation } = require("../utils")

exports.provideLoanData = async (req, res, next) => {
  try {
    const { value, error } = loanValidation.createLoanDataValidator(req.body);
    if (error) {
      throw new Error(400, 'Invalid loan data');
    }

    req.body = value;
    next();

  } catch(err) {
    next(err);
  }
}