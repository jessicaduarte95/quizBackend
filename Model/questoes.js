const Sequelize = require('sequelize');
const database = require('../db')

const Questoes =  database.define('questoes', {
    idquestao:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nivel:{
        type: Sequelize.INTEGER
    },
    pergunta:{
        type: Sequelize.STRING
    }
});

module.exports = Questoes;