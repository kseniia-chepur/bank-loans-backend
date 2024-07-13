const { Loan } = require("../models");

exports.createLoan = async (req, res) => {
  try {
    const newLoan = await Loan.create(req.body);
    
    res.status(201).json({
      loan: newLoan,
    });
  } catch(err) {
    console.log(err);
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();

    res.status(200).json({
      status: 'Request succeeded',
      loans,
    });
  } catch(err) {
    next(err);
  }
};

exports.getOneLoan = async (req, res) => {
  try {
    const loans = await Loan.find();

    res.status(200).json({
      status: 'Request succeeded',
      loans,
    });
  } catch(err) {
    next(err);
  }
};