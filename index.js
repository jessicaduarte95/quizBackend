const express = require("express");
const app = express();
const cors = require("cors")
const Usuarios = require("./Routes/usuarios")
const QuestionRouter = require("./Routes/QuestionRouter");

app.use(cors());
app.use(express.json());

app.use(Usuarios.cadastrarUsuario);
app.use(Usuarios.login);

app.use(QuestionRouter.obterPerguntas);
app.use(QuestionRouter.obterOpcoes);

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})