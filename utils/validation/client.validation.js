const Joi = require('joi');

const { regex, ownershipTypes } = require('../../constants');

exports.createClientDataValidator = (data) =>
  Joi.object()
    .keys({
      name: Joi.string().min(3).max(30).required(),
      ownership: Joi.string().valid(...Object.values(ownershipTypes)).required(),
      address: Joi.string().min(5).max(40).required(),
      phone: Joi.string().length(13).regex(regex.PHONE_REGEX).required(),
      contactPerson: Joi.string().min(2).max(20).required(),
    })
    .validate(data);

exports.updateClientDataValidator = (data) =>
  Joi.object()
    .keys({
      address: Joi.string().min(5).max(40),
      phone: Joi.string().length(13),
      contactPerson: Joi.string().min(2).max(20),
    })
    .validate(data);
