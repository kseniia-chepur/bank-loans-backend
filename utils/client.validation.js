const Joi = require('joi');

exports.createClientDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      name: Joi.string().min(3).max(30).required(),
      ownership: Joi.string().required(),
      address: Joi.string().min(5).max(40).required(),
      phone: Joi.string().length(13).required(),
      contactPerson: Joi.string().min(2).max(20).required(),
    })
    .validate(data);

exports.updateClientDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      address: Joi.string().min(5).max(40),
      phone: Joi.string().length(13),
      contactPerson: Joi.string().min(2).max(20),
    })
    .validate(data);

