const Joi = require('joi');

const { loanTypes } = require('../../constants');

exports.createLoanDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      loanType: Joi.string().valid(...Object.values(loanTypes)).required(),
      client: Joi.string().required(),
      amount: Joi.number().min(1000).max(1000000).required(),
      dateIssued: Joi.date(),
      dateRepaid: Joi.date(),
      installments: Joi.number().min(1).max(20),
      fineAmount: Joi.number().min(0).max(500000),

    })
    .validate(data);

