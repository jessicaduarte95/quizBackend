const express = require("express");
const app = express();
const OptionsController = require('../Controller/OptionsController')

const optionsController = new OptionsController();

const getOptions = app.post('/obterOpcoes', optionsController.getOptionsQuestions);
const insertOptions = app.post('/insertOptions', optionsController.insertOptions);

module.exports = {
    getOptions,
    insertOptions
}