const router = require('express').Router();
const Controller = require('../controllers');
const errorHandler = require('../middlewares/errorHandler');

// Register and Login
router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);

// Use Global ErrorHandler
router.use(errorHandler);

module.exports = router;