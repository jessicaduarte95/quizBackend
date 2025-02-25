const express = require("express");
const app = express();
const QuestionController = require('../Controller/QuestionController');

const questionController = new QuestionController();

const obterPerguntas = app.post('/obterPerguntas', questionController.getQuestionsLevel);
const insertQuestion = app.post('/insertQuestion', questionController.insertQuestion)

module.exports = {
    obterPerguntas,
    insertQuestion
}