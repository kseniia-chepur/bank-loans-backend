const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { HttpError } = require("../utils");
const { httpErrorMsg } = require("../constants");
const { User } = require("../models");


exports.registerNewUser = async (userData) => {
  const { email, password, role } = userData;
  const passwordWithHash = await bcrypt.hash(password, 10);

  const newUserData = {
    email,
    password: passwordWithHash,
    role,
  }

  const newUser = await User.create(newUserData);
  
  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  newUser.password = undefined;

  return {
    user: newUser,
    token,
  }
};

exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new HttpError(404, httpErrorMsg.USER_NOT_FOUND);
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new HttpError(400, httpErrorMsg.INVALID_LOGIN_CREDENTIALS);
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  user.password = undefined;

  return { 
    user,
    token,
  }
};

exports.checkUserExistsByEmail = async (email) => {
  const userExists = await User.exists(email);

  if (userExists) {
    throw new HttpError(409, httpErrorMsg.USER_EXISTS);
  }
};

exports.verifyToken = (token) => {
  if (!token) {
    throw new HttpError(401, httpErrorMsg.UNAUTHORIZED);
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    return id;
  } catch(err) {
    throw new HttpError(401, httpErrorMsg.UNAUTHORIZED);
  }
};

exports.getOneUser = (id) => User.findById(id);
