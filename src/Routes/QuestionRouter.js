const express = require("express");
const app = express();
const QuestionController = require('../Controller/QuestionController');

const questionController = new QuestionController();

const getQuestion = app.get('/question', questionController.getQuestionsLevel);
const insertQuestion = app.post('/question', questionController.insertQuestion)

module.exports = {
    getQuestion,
    insertQuestion
}