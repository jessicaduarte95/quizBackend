const express           = require("express");
const app               = express();
const cors              = require("cors");
const config            = require("config");

// Routers
const UserRouter        = require("./src/Routes/UserRouter");
const QuestionRouter    = require("./src/Routes/QuestionRouter");
const OptionsRouter     = require('./src/Routes/OptionsRouter');
const PointsRouter      = require('./src/Routes/PointsRouter');
const EnableLevelRouter = require('./src/Routes/EnableLevelRouter');

// Database
const { connect }       = require("./src/db/db");

app.use(cors());
app.use(express.json());

// Check connection
connect();

// Routers
app.use(UserRouter.cadastrarUsuario);
app.use(UserRouter.login);
app.use(UserRouter.checkUser);
app.use(UserRouter.changePassword);

app.use(QuestionRouter.obterPerguntas);
app.use(QuestionRouter.insertQuestion);

app.use(OptionsRouter.getOptions);
app.use(OptionsRouter.insertOptions);

app.use(PointsRouter.cadastrarPontos);

app.use(EnableLevelRouter.insertEnableLevel);
app.use(EnableLevelRouter.getEnableLevel);
app.use(EnableLevelRouter.getFinishLevel);

const PORT = config.get("server.port");
const HOST = config.get("server.host");

app.listen(PORT, () => {
    console.log(`Server is runing on ${HOST}:${PORT}`)
})