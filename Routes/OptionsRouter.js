const express = require("express");
const app = express();
const OptionsController = require('../Controller/OptionsController')

const optionsController = new OptionsController();

const getOptions = app.post('/obterOpcoes', optionsController.getOptionsQuestions);

module.exports = {
    getOptions
}