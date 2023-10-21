const express = require("express");
const app = express();
const QuestionController = require('../Controller/QuestionController');

const questionController = new QuestionController();

const obterPerguntas = app.post('/obterPerguntas', questionController.getQuestionsLevel);
const obterOpcoes = app.post('/obterOpcoes', questionController.getOptionsQuestions);
const insertQuestion = app.post('/insertQuestion', questionController.insertQuestion)

module.exports = {
    obterPerguntas,
    obterOpcoes,
    insertQuestion
}