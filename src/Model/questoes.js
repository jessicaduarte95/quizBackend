const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/db')

class Questoes extends Model { }

Questoes.init(
    {
        idquestao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nivel: {
            type: DataTypes.INTEGER
        },
        pergunta: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'questoes',
    }
)

module.exports = Questoes;