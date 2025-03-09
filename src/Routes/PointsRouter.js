const express = require("express");
const app = express();
const PointsController = require('../Controller/PointsController');

const pointsController = new PointsController();

const setPointsLevel = app.post('/points/:id', pointsController.setPointsLevel);


module.exports = {
    setPointsLevel
}