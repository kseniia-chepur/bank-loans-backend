const Joi = require('joi');

const { regex, userRoles } = require('../../constants');

exports.signupUserDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      email: Joi.string().email().required(),
      username: Joi.string().min(3).max(20).required(),
      password: Joi.string().regex(regex.PASSWORD_REGEX).required(),
      role: Joi.string().valid(...Object.values(userRoles)),
    })
    .validate(data);

exports.loginUserDataValidator = (data) =>
  Joi.object()
    .options({ abortEarly: false })
    .keys({
      username: Joi.string().min(3).max(20).required(),
      password: Joi.string().regex(regex.PASSWORD_REGEX).required(),
    })
    .validate(data);
