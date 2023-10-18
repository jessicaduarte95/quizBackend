const express = require("express");
const app = express();
const cors = require("cors")
const UserRouter = require("./Routes/UserRouter")
const QuestionRouter = require("./Routes/QuestionRouter");

app.use(cors());
app.use(express.json());

app.use(UserRouter.cadastrarUsuario);
app.use(UserRouter.login);

app.use(QuestionRouter.obterPerguntas);
app.use(QuestionRouter.obterOpcoes);

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})