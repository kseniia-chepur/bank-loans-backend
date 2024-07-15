const { NOT_APPLIED } = require("./overdueDays");

const finePercent = {
  NOT_APPLIED: 0,
  MIN: 0.5,
  LOW: 3,
  MID: 5,
  HIGH: 10,
};

module.exports = finePercent;

