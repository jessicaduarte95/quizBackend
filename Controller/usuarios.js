const { response } = require('express');
const Usuarios = require('../Service/usuarios');

const cadastrarUsuario = async (req,res) => {
    const data = req.body;
    await Usuarios.cadastrarUsuario(data)
    .then((response) => {res.json(response)})
    .catch((error) => console.log(error))
}

const login = async (req, res) => {
    const data = req.body;
    await Usuarios.login(data)
    .then((response) => {res.json(response)})
    .catch((error) => console.log(error))
}

module.exports = {
    cadastrarUsuario,
    login
}