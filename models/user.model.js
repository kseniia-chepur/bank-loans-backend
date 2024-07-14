const { model, Schema } = require('mongoose');

const { userRoles } = require('../constants');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(userRoles),
      default: userRoles.SPECIALIST,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


const User = model('User', userSchema);

module.exports = User;
