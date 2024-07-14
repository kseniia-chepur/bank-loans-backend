const { userService } = require("../services")

exports.signup = async (req, res, next) => {
  try {
    const { user, token } = await userService.registerNewUser(req.body);

    res.status(201).json({
      status: 'Request succeeded',
      user,
      token,
    });
  } catch(err) {
    console.log(err)
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { user, token } = await userService.loginUser(req.body);

    res.status(200).json({
      status: 'Request succeeded',
      user,
      token,
    });
  } catch(err) {
    console.log(err)
    next(err);
  }  
}