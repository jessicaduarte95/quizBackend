const express = require("express");
const app = express();
const UserController = require('../Controller/UserController');

const userController = new UserController();

const getUser = app.get('/user', userController.getUser);
const createUser = app.post('/user/create', userController.createUser);
const login = app.post('/user/login', userController.login);
const updatePassword = app.put('/user/:id', userController.updatePassword);

module.exports = {
    getUser,
    createUser,
    login,
    updatePassword
};