const Joi = require('joi');

exports.createLoanDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      loanType: Joi.string().length(24).required(),
      client: Joi.string().length(24).required(),
      amount: Joi.number().min(1000).max(10000000).required(),
      dateIssued: Joi.date(),
      parts: Joi.number().min(1).max(20),
    })
    .validate(data);

exports.updateLoanDataValidator = (data) =>
  Joi.object()
    .keys({
      dateRepaid: Joi.date(),
    })
    .validate(data);

