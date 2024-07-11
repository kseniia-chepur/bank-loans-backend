const { model, Schema } = require('mongoose');
const { loanTypes } = require('../constants');

const loanTypesSchema = new Schema({
  name: {
    type: String,
    enum: Object.values(loanTypes),
    required: true,
  },
  loanConditions: {
    type: String, 
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  }, 
  loanTerm: { // Term in months
    type: Number,
    required: true,
  }
});

const LoanTypes = model('LoanTypes', loanTypesSchema);

module.exports = LoanTypes;
