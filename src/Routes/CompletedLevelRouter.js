const express = require("express");
const app = express();
const CompletedLevelController = require('../Controller/CompletedLevelController');

const completedLevelController = new CompletedLevelController();

const getCompletedLevel = app.get('/completed/level/:id', completedLevelController.getCompletedLevel);

module.exports = {
    getCompletedLevel
}