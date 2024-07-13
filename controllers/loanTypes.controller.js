const { Loan } = require("../models");
const { loanTypeService } = require("../services");

exports.createLoanType = async (req, res) => {
  try {
    const newLoanType = await loanTypeService.createLoanType(req.body);
    
    res.status(201).json({
      status: 'Request succeeded',
      ['loan type']: newLoanType,
    });
  } catch(err) {
    res.status(500).json(({ message: 'Failed to create loan type' }));
  }
};

exports.getLoanTypes = async (req, res) => {
  try {
    const loanTypes = await loanTypeService.getAllLoanTypes();

    res.status(200).json({
      status: 'Request succeeded',
      ['loan types']: loanTypes,
    });
  } catch(err) {
    res.status(500).json(({ message: 'Failed to fetch loan type' }));
  }
};

exports.getOneLoanType = async (req, res) => {
  const { id } = req.params;

  try {
    const loanType = await loanTypeService.getOneLoanType(id);

    res.status(200).json({
      status: 'Request succeeded',
      ['loan type']: loanType,
    });
  } catch(err) {
    res.status(500).json(({ message: 'Failed to fetch loan type' }));
  }
};

exports.updateLoanType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedLoanType = await loanTypeService.updateLoanType(id, req.body);

    res.status(200).json({
      status: 'Request succeeded',
      ['loan type']: updatedLoanType,
    });
  } catch(err) {
    res.status(500).json(({ message: 'Failed to update loan type' }));
  }
};

exports.deleteLoanType = async (req, res) => {
  const { id } = req.params;

  try {
    const existingLoans = await Loan.findOne({ loanType: id });

    if (existingLoans) {
      return res.status(400).json({ message: 'Cannot delete loan type with existing loans' });
  }

   await loanTypeService.deleteLoanType(id);

    res.sendStatus(204);
  } catch(err) {
    res.status(500).json(({ message: 'Failed to delete loan type' }));
  }
};