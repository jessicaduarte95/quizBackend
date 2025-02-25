const express = require("express");
const app = express();
const PointsController = require('../Controller/PointsController');

const pointsController = new PointsController();

const cadastrarPontos = app.post('/cadastrarPontos', pointsController.setPointsLevel);


module.exports = {
    cadastrarPontos
}