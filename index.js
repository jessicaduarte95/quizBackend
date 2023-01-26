const express = require("express");
const app = express();
const cors = require("cors")
const Usuarios = require("./Routes/usuarios")
const Questoes = require("./Routes/questoes");

app.use(cors());
app.use(express.json());

app.use(Usuarios.cadastrarUsuario);
app.use(Usuarios.login);

app.use(Questoes.obterPerguntas);

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})