// wiki.js - Wiki route module.

const express = require("express");
const regRouter = express.Router();
const app = express();







// const {getUsers, getUserById, createUser, deleteUser, updateUser} = require('../controller/usercontroller.js');
const {getUsers, getUserById, createUser, deleteUser, updateUser} = require('../controller/usercontroller2.js');
const userController = require("../controller/usercontroller2.js");



regRouter.get('/', getUsers);
regRouter.get('/users/:id', getUserById);
regRouter.post('/users', createUser);
regRouter.put('/users/:id', updateUser);
regRouter.delete('/users/:id', deleteUser);





module.exports = regRouter;






