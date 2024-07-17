const { successMsg } = require('../constants');
const { userService } = require('../services');

exports.signup = async (req, res, next) => {
  try {
    const { user, token } = await userService.registerNewUser(req.body);

    res.status(201).json({
      status: successMsg,
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { user, token } = await userService.loginUser(req.body);

    res.status(200).json({
      status: successMsg,
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.showPersonalCabinet = (req, res) => {
  req.user.password = undefined;

  res.status(200).json({
    status: successMsg,
    user: req.user,
  });
};
