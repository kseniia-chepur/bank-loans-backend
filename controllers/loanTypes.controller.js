const { successMsg } = require('../constants');
const { loanTypeService } = require('../services');

exports.createLoanType = async (req, res, next) => {
  try {
    const newLoanType = await loanTypeService.createLoanType(req.body);

    res.status(201).json({
      status: successMsg,
      'loan type': newLoanType,
    });
  } catch (err) {
    next(err);
  }
};

exports.getLoanTypes = async (req, res, next) => {
  try {
    const loanTypes = await loanTypeService.getAllLoanTypes();

    res.status(200).json({
      status: successMsg,
      'loan types': loanTypes,
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneLoanType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const loanType = await loanTypeService.getOneLoanType(id);

    res.status(200).json({
      status: successMsg,
      'loan type': loanType,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateLoanType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedLoanType = await loanTypeService.updateLoanType(id, req.body);

    res.status(200).json({
      status: successMsg,
      'loan type': updatedLoanType,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteLoanType = async (req, res, next) => {
  const { id } = req.params;

  try {
    await loanTypeService.deleteLoanType(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
