const express = require("express");
const app = express();
const OptionsController = require('../Controller/OptionsController')

const optionsController = new OptionsController();

const getOptions = app.get('/options/:idQuestion', optionsController.getOptionsQuestions);
const insertOptions = app.post('/options', optionsController.insertOptions);

module.exports = {
    getOptions,
    insertOptions
}