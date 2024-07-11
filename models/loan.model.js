const { model, Schema } = require('mongoose');

const loanSchema = new Schema({
  loanType: {
    type: Schema.Types.ObjectId, 
    ref: 'LoanType', 
    required: true,
  },
  client: {
    type: Schema.Types.ObjectId, 
    ref: 'Client',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }, 
  dateIssued: {
    type: Date,
    default: Date.now(),
  },
  dateRepaid: {
    type: Date,
  },
  installments: {
    type: Number,
    default: 1,
  },
  fineAmount: {
    type: Number,
    default: 0,
  }
});

const Loan = model('Loan', loanSchema);

module.exports = Loan;
