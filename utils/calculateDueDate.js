const calculateDueDate = (termInMonths) => {
  const monthsInYear = 12;
  const termInYears = termInMonths / monthsInYear;
  const date = new Date();
  const year = date.getFullYear();
  const dueDate = date.setFullYear(year + termInYears);

  return dueDate;
};

module.exports = calculateDueDate;
