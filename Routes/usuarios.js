const express = require("express");
const app = express();
const Usuarios = require('../Controller/usuarios');

const cadastrarUsuario = app.post('/cadastrar', Usuarios.cadastrarUsuario);
const login = app.post('/login', Usuarios.login)

module.exports = {
    teste,
    cadastrarUsuario,
    login
};