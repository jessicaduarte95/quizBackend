const express = require("express");
const app = express();
const Usuarios = require('../Controller/usuarios');

const cadastrarUsuario = app.post('/cadastrar', Usuarios.cadastrarUsuario);


const teste = app.get("/", (req,res) => {
    res.send("Teste Rotas")
});

module.exports = {
    teste,
    cadastrarUsuario
};