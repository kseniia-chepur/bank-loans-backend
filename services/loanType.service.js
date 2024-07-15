const { Types } = require("mongoose");

const { LoanType, Loan } = require("../models");
const { HttpError } = require("../utils");
const { httpErrorMsg } = require("../constants");

exports.createLoanType = (loanTypeData) => LoanType.create(loanTypeData);

exports.getAllLoanTypes = () => LoanType.find();

exports.getOneLoanType = (id) => LoanType.findById(id);

exports.updateLoanType = async (id, updatedLoanTypeData) => {
  const loanType = await LoanType.findById(id);

  Object.keys(updatedLoanTypeData).forEach(key => {
    loanType[key] = updatedLoanTypeData[key];
  });

  return loanType.save();
};

exports.deleteLoanType = async (id) => {
  const existingLoans = await Loan.findOne({ loanType: id });

  if (existingLoans) {
    throw new HttpError(400, httpErrorMsg.CANNOT_DELETE_LOANTYPE);
  } 

  await LoanType.findByIdAndDelete(id);
}

exports.checkLoanTypeExistsById = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
      throw new HttpError( 404, httpErrorMsg.DATA_NOT_FOUND);
  }

  const loanTypeExists = await LoanType.exists({ _id: id });

  if (!loanTypeExists) {
    throw new HttpError(404,  httpErrorMsg.DATA_NOT_FOUND);
  }
};