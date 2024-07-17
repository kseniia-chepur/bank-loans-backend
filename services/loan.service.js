const { Types } = require('mongoose');

const { Loan, Client, LoanType } = require('../models');
const { HttpError, calculateDueDate, calculateFine } = require('../utils');
const { httpErrorMsg } = require('../constants');

exports.createLoan = async (loanData) => {
  const { loanType: loanTypeId, client: clientId } = loanData;

  const loanType = await LoanType.findById(loanTypeId).lean();

  const client = await Client.findById(clientId);

  if (!loanType || !client) {
    throw new HttpError(400, httpErrorMsg.INVALID_DATA);
  }

  const dueDate = calculateDueDate(loanType.term);

  return Loan.create({
    ...loanData,
    dueDate,
  });
};

exports.getLoans = async () => {
  const loans = await Loan.find()
    .populate({ path: 'loanType', select: 'name rate term' })
    .populate({ path: 'client', select: 'name phone contactPerson' });

  return loans;
};

exports.getOneLoan = async (id) => {
  const loan = await Loan.findById(id)
    .populate({ path: 'loanType', select: 'name rate term' })
    .populate({ path: 'client', select: 'name phone contactPerson' });

  return loan;
};

exports.updateLoan = async (id, repaymentDate) => {
  const loan = await Loan.findById(id);

  if (repaymentDate < loan.dateIssued) {
    throw new HttpError(400, httpErrorMsg.INVALID_DATA);
  }

  if (repaymentDate > loan.dueDate) {
    loan.fineAmount = calculateFine(loan.amount, loan.dueDate, repaymentDate);
  }

  loan.dateRepaid = repaymentDate;

  return loan.save();
};

exports.deleteLoan = async (id) => {
  const loan = await Loan.findById(id);

  if (loan.fineAmount !== 0 || !loan.dateRepaid) {
    throw new HttpError(400, httpErrorMsg.CANNOT_DELETE_LOAN);
  }

  await Loan.findByIdAndDelete(id);
};

exports.checkLoanExistsById = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
    throw new HttpError(404, httpErrorMsg.DATA_NOT_FOUND);
  }

  const loanExists = await Loan.exists({ _id: id });

  if (!loanExists) {
    throw new HttpError(404, httpErrorMsg.DATA_NOT_FOUND);
  }
};
