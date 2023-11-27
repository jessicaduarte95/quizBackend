const express = require("express");
const app = express();
const EnableLevelController = require('../Controller/EnableLevelController');

const enableLevelController = new EnableLevelController();

const insertEnableLevel = app.post('/habilitarNivel', enableLevelController.insertEnableLevel);
const getEnableLevel = app.get('/habilitarNivel/:id', enableLevelController.getEnableLevel);

module.exports = {
    insertEnableLevel,
    getEnableLevel
}