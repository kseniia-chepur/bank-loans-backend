const { successMsg } = require('../constants');
const { loanService } = require('../services');

exports.createLoan = async (req, res, next) => {
  try {
    const newLoan = await loanService.createLoan(req.body);

    res.status(201).json({
      status: successMsg,
      loan: newLoan,
    });
  } catch (err) {
    next(err);
  }
};

exports.getLoans = async (req, res, next) => {
  try {
    const loans = await loanService.getLoans();

    res.status(200).json({
      status: successMsg,
      loans,
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneLoan = async (req, res, next) => {
  const { id } = req.params;

  try {
    const loan = await loanService.getOneLoan(id);

    res.status(200).json({
      status: successMsg,
      loan,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateLoan = async (req, res, next) => {
  const { id } = req.params;
  const { dateRepaid } = req.body;

  try {
    const updatedLoan = await loanService.updateLoan(id, dateRepaid);

    res.status(200).json({
      status: successMsg,
      loan: updatedLoan,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteLoan = async (req, res, next) => {
  const { id } = req.params;

  try {
    await loanService.deleteLoan(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
