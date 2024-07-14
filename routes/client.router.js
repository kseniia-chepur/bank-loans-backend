const { userRoles } = require('../constants');
const { clientController } = require('../controllers');
const { clientMiddleware, authMiddleware } = require('../middlewares');

const router = require('express').Router();

router.use(authMiddleware.protectRoutes);

router.post('/', clientMiddleware.handleCreateClientData, clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:id', clientMiddleware.validateClientId, clientController.getOneClient);
router.patch('/:id', clientMiddleware.validateClientId, clientMiddleware.handleUpdateClientData, clientController.updateClient);
router.use(authMiddleware.allowFor(userRoles.ADMIN));
router.delete('/:id', clientMiddleware.validateClientId, clientController.deleteClient);

module.exports = router;