require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const UserRouter = require("./Routes/UserRouter");
const QuestionRouter = require("./Routes/QuestionRouter");
const OptionsRouter = require('./Routes/OptionsRouter');
const PointsRouter = require('./Routes/PointsRouter');
const EnableLevelRouter = require('./Routes/EnableLevelRouter');

app.use(cors());
app.use(express.json());

app.use(UserRouter.cadastrarUsuario);
app.use(UserRouter.login);

app.use(QuestionRouter.obterPerguntas);
app.use(QuestionRouter.insertQuestion);

app.use(OptionsRouter.getOptions);
app.use(OptionsRouter.insertOptions);

app.use(PointsRouter.cadastrarPontos);

app.use(EnableLevelRouter.insertEnableLevel);
app.use(EnableLevelRouter.getEnableLevel);
app.use(EnableLevelRouter.getFinishLevel);

app.listen(5000, () => {
    console.log("Servidor Rodando!")
})