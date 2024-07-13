const { loanTypesController } = require('../controllers');
const { loanTypeMiddleware } = require('../middlewares');

const router = require('express').Router();

router.post('/', loanTypeMiddleware.handleCreateLoanType, loanTypesController.createLoanType);
router.get('/',  loanTypesController.getLoanTypes);
router.get('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypesController.getOneLoanType);
router.patch('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypeMiddleware.handleUpdateLoanType, loanTypesController.updateLoanType);
router.delete('/:id', loanTypeMiddleware.validateLoanTypeId, loanTypesController.deleteLoanType);

module.exports = router;