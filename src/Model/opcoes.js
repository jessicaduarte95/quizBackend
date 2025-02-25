const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db')

class Opcoes extends Model { }

Opcoes.init(
    {
        idopcao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idquestao: {
            type: DataTypes.INTEGER
        },
        nivel: {
            type: DataTypes.INTEGER
        },
        correta: {
            type: DataTypes.INTEGER
        },
        opcao: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'opcoes',
    }
)

module.exports = Opcoes;