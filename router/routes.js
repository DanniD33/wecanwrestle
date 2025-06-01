const express = require('express');
const router = express.Router();
// const { registerUser } = require('../controller/userController');
// const userController = require('../controller/userController');
const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controller/userController');





// POST route for registration form
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
