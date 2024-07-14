const clientController = require('./client.controller');
const loanTypesController = require('./loanTypes.controller');
const loanController = require('./loan.controller');
const authController = require('./auth.controller');
const errorController = require('./error.controller');

module.exports = {
  clientController,
  loanTypesController,
  loanController,
  authController,
  errorController,
}