const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class HabilitarNivel extends Model {}

HabilitarNivel.init(
    {
        idhabilitar: {
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
        habilitar: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'habilitarnivel',
    }
)

module.exports = HabilitarNivel;