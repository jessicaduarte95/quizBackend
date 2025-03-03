const express = require("express");
const app = express();
const EnableLevelController = require('../Controller/EnableLevelController');

const enableLevelController = new EnableLevelController();

const getEnableLevel = app.get('/enable/level/:id', enableLevelController.getEnableLevel);
const insertEnableLevel = app.post('/enable/level', enableLevelController.insertEnableLevel);
const getFinishLevel = app.get('/nivelConcluido/:id/:nivel', enableLevelController.getFinishLevel);

module.exports = {
    getEnableLevel,
    insertEnableLevel,
    getFinishLevel
}