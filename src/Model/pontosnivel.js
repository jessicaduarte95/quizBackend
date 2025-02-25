const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/db');

class PontosNivel extends Model {}

PontosNivel.init(
    {
        idpontosnivel: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nivel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pontos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'pontos',
    }
)

module.exports = PontosNivel;