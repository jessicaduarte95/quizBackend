const Sequelize = require('sequelize');
const database = require('../db')

const Usuarios = database.define('usuarios', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    }
})
module.exports = Usuarios;