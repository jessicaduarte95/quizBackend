const express = require("express");
const app = express();
const Questoes = require('../Controller/questoes');

const obterQuestoes = app.get('/obterQuestoes', Questoes.obterQuestoes);

module.exports = {
    obterQuestoes
}