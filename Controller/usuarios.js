const Usuarios = require('../Repository/usuarios')

const cadastrarUsuario = async (req,res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;
    console.log("Chegou controller", nome, email, senha)
}

module.exports = {
    cadastrarUsuario,
}