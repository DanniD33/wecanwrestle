const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/userController');






// POST route for registration form
router.post('/register', registerUser);

module.exports = router;
