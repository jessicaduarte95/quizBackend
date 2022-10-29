const Usuarios = require('../Repository/usuarios')

const cadastrarUsuario = async (req,res) => {
    const data = req.body;
    await Usuarios.cadastrarUsuario(data)
    .then((response) => {res.json(response)})
    .catch((error) => console.log(error))
}

module.exports = {
    cadastrarUsuario,
}