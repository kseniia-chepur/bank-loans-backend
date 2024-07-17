const { userRoles } = require('../constants');
const { loanTypesController } = require('../controllers');
const { loanTypeMiddleware, authMiddleware } = require('../middlewares');

const router = require('express').Router();

router.use(authMiddleware.protectRoutes);

router.post('/', loanTypeMiddleware.handleCreateLoanType, loanTypesController.createLoanType);
router.get('/', loanTypesController.getLoanTypes);
router.get('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypesController.getOneLoanType);
router.patch('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypeMiddleware.handleUpdateLoanType, loanTypesController.updateLoanType);

router.use(authMiddleware.allowFor(userRoles.ADMIN));

router.delete('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypesController.deleteLoanType);

module.exports = router;
