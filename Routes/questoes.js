const express = require("express");
const app = express();
const Questoes = require('../Controller/questoes');

const obterPerguntas = app.post('/obterPerguntas', Questoes.obterPerguntas);
const obterOpcoes = app.post('/obterOpcoes', Questoes.obterOpcoes);

module.exports = {
    obterPerguntas,
    obterOpcoes
}