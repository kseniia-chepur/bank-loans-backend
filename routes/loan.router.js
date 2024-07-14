const { loanController } = require('../controllers');
const { loanMiddleware, authMiddleware } = require('../middlewares');

const router = require('express').Router();

router.use(authMiddleware.protectRoutes);

router.post('/', loanMiddleware.provideLoanData, loanController.createLoan);
router.get('/', loanController.getLoans);
router.get('/:id');
router.patch('/:id');
router.delete('/:id');

module.exports = router;