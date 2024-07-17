
const { httpErrorMsg } = require("../constants");
const { userService } = require("../services");
const { authValidation, HttpError } = require("../utils")

exports.handleSignupData = async (req, res, next) => {
  try {
    const { value, error } = authValidation.signupUserDataValidator(req.body);

  if (error) {
    throw new HttpError(400, httpErrorMsg.INVALID_DATA);
  }

  await userService.checkUserExistsByEmail({ email: value.email });

  req.body = value;
  next();
  } catch(err) {
    next(err);
  }
};


exports.handleLoginData = (req, res, next) => {
  const { value, error } = authValidation.loginUserDataValidator(req.body);

  if (error) {
    throw new HttpError(401, httpErrorMsg.UNAUTHORIZED);
  }

  req.body = value;
  next(); 
};

exports.protectRoutes = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.startsWith('Bearer ') && req.headers.authorization.split(' ')[1];
    const userId = userService.verifyToken(token);

    if (!userId) {
      throw new HttpError(401, httpErrorMsg.UNAUTHORIZED);
    }
  
    const currentUser = await userService.getOneUser(userId);
  
    if (!currentUser) {
      throw new HttpError(401, httpErrorMsg.UNAUTHORIZED);
    }
  
    req.user = currentUser;
    next();
  } catch(err) {
    next(err);
  }
};

exports.allowFor = (...roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) return next();
  
  next(new HttpError(403, httpErrorMsg.FORBIDDEN));
}