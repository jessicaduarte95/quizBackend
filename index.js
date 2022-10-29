const express = require("express");
const app = express();
const cors = require("cors")
const Usuarios = require("./Routes/usuarios")

app.use(cors());

app.use(Usuarios.cadastrarUsuario);

app.use(Usuarios.teste);

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})