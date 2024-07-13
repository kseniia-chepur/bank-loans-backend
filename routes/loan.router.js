const { loanController } = require('../controllers');
const { loanMiddleware } = require('../middlewares');

const router = require('express').Router();

router.post('/', loanMiddleware.provideLoanData, loanController.createLoan);
router.get('/', loanController.getLoans);
router.get('/:id');
router.patch('/:id');
router.delete('/:id');

module.exports = router;