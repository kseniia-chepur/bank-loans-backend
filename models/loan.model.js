const { model, Schema, Types } = require('mongoose');

const loanSchema = new Schema(
  {
    loanType: {
      type: Types.ObjectId,
      ref: 'LoanType',
      required: true,
    },
    client: {
      type: Types.ObjectId, 
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
    dueDate: {
      type: Date,
    },
    parts: {
      type: Number,
      default: 1,
    },
    dateRepaid: {
      type: Date,
    },
    fineAmount: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Loan = model('Loan', loanSchema);

module.exports = Loan;
