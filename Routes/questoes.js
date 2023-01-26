const express = require("express");
const app = express();
const Questoes = require('../Controller/questoes');

const obterPerguntas = app.post('/obterPerguntas', Questoes.obterPerguntas);

module.exports = {
    obterPerguntas
}