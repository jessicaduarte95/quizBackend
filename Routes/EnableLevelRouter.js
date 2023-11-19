const express = require("express");
const app = express();
const EnableLevelController = require('../Controller/EnableLevelController');

const enableLevelController = new EnableLevelController();

const insertEnableLevel = app.post('/habilitarNivel', enableLevelController.insertEnableLevel);

module.exports = {
    insertEnableLevel
}