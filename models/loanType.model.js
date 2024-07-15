const { model, Schema } = require('mongoose');
const { loanTypes } = require('../constants');

const loanTypeSchema = new Schema(
  {
    name: {
      type: String,
      enum: Object.values(loanTypes),
      required: true,
    },
    conditions: {
      type: String, 
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    }, 
    term: { // Term in months
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const LoanType = model('LoanType', loanTypeSchema);

module.exports = LoanType;
