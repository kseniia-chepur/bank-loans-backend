const { clientController } = require('../controllers');
const { clientMiddleware } = require('../middlewares');

const router = require('express').Router();

router.post('/', clientMiddleware.handleCreateClientData, clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:id', clientMiddleware.validateClientId, clientController.getOneClient);
router.patch('/:id', clientMiddleware.validateClientId, clientMiddleware.handleUpdateClientData, clientController.updateClient);
router.delete('/:id', clientMiddleware.validateClientId, clientController.deleteClient);

module.exports = router;