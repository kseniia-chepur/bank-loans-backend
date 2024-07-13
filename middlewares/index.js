const clientMiddleware = require('./client.middleware');
const loanTypeMiddleware = require('./loanTypes.middleware');
const loanMiddleware = require('./loan.middleware');


module.exports = {
  clientMiddleware,
  loanTypeMiddleware,
  loanMiddleware,
}