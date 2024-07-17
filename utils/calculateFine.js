const { finePercent, overdueDays } = require('../constants');

const calculateFine = (amount, dueDate, dateRepaid) => {
  const convertToSec = 1000;
  const convertToMin = 60;
  const convertToHours = 60;
  const convertToDays = 24;

  const delta = (new Date(dateRepaid) - new Date(dueDate)) / convertToSec / convertToMin / convertToHours / convertToDays;

  let currentFinePercent;

  switch (true) {
    case delta < overdueDays.NOT_APPLIED:
      currentFinePercent = finePercent.NOT_APPLIED;
      break;
    case delta < overdueDays.MIN:
      currentFinePercent = finePercent.MIN;
      break;
    case delta < overdueDays.LOW:
      currentFinePercent = finePercent.LOW;
      break;
    case delta < overdueDays.MID:
      currentFinePercent = finePercent.MID;
      break;
    default:
      currentFinePercent = finePercent.HIGH;
  };

  const fine = (amount / 100) * currentFinePercent;

  return fine;
};

module.exports = calculateFine;
