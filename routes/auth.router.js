const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/signup', authMiddleware.handleSignupData, authController.signup);
router.post('/login', authMiddleware.handleLoginData, authController.login);

module.exports = router;