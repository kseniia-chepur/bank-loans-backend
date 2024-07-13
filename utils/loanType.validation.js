const Joi = require('joi');

const { loanTypes } = require('../constants');

exports.createLoanTypeValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().valid(...Object.values(loanTypes)).required(),
      conditions: Joi.string().min(5).max(40).required(),
      rate: Joi.number().min(1).max(40).required(),
      term: Joi.number().min(6).max(60).required(),
    })
    .validate(data);

exports.updateLoanTypeValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      conditions: Joi.string().min(5).max(40),
      rate: Joi.number().min(1).max(40),
      term: Joi.number().min(6).max(60),
    })
    .validate(data);

