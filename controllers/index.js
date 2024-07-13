const clientController = require('./client.controller');
const loanTypesController = require('./loanTypes.controller');
const loanController = require('./loan.controller');
const errorController = require('./error.controller');

module.exports = {
  clientController,
  loanTypesController,
  loanController,
  errorController,
}