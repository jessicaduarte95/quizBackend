const express = require("express");
const app = express();

const teste = app.get("/", (req,res) => {
    res.send("Teste Routes")
});

module.exports = {teste};