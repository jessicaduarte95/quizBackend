const express = require("express");
const app = express();
const UserController = require('../Controller/UserController');

const userController = new UserController();

const cadastrarUsuario = app.post('/cadastrar', userController.createUser);
const login = app.post('/login', userController.login);
const checkUser = app.post('/checkUser', userController.checkUser);
const changePassword = app.put('/changePassword', userController.changePassword);

module.exports = {
    cadastrarUsuario,
    login,
    checkUser,
    changePassword
};