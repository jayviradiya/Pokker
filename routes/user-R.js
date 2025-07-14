const express = require('express');
const router = express.Router();
const authController = require('../controllers/user-C');
const verifyToken = require('../middleware/verifyToken');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/users', verifyToken, authController.getAllUsers);
router.get('/user/:id', verifyToken, authController.getUserById);

module.exports = router;
