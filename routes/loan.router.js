const { userRoles } = require('../constants');
const { loanController } = require('../controllers');
const { loanMiddleware, authMiddleware } = require('../middlewares');

const router = require('express').Router();

router.use(authMiddleware.protectRoutes);

router.post('/', loanMiddleware.handleCreateLoan, loanController.createLoan);
router.get('/', loanController.getLoans);
router.get('/:id', loanMiddleware.validateLoanId, loanController.getOneLoan);
router.patch('/:id', loanMiddleware.validateLoanId, loanMiddleware.handleUpdateLoan, loanController.updateLoan);

router.use(authMiddleware.allowFor(userRoles.ADMIN));

router.delete('/:id', loanMiddleware.validateLoanId, loanController.deleteLoan);

module.exports = router;
