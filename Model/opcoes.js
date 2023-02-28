const Sequelize = require('sequelize');
const database = require('../db');

const Opcoes = database.define('opcoes', {
    idopcao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idquestao:{
        type: Sequelize.INTEGER
    },
    nivel:{
        type: Sequelize.INTEGER
    },
    correta:{
        type: Sequelize.INTEGER
    },
    opcao:{
        type: Sequelize.STRING
    }
})

module.exports = Opcoes;