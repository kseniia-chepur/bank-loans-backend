const PHONE_REGEX = /^\+380[0-9]{9}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;

module.exports = {
  PHONE_REGEX,
  PASSWORD_REGEX,
}