const express = require("express");
const app = express();
const EnableLevelController = require('../Controller/EnableLevelController');

const enableLevelController = new EnableLevelController();

const getEnableLevel = app.get('/enable/level/:id', enableLevelController.getEnableLevel);
const insertEnableLevel = app.post('/enable/level', enableLevelController.insertEnableLevel);

module.exports = {
    getEnableLevel,
    insertEnableLevel
}