const { DataTypes, Model } = require('sequelize');
const { sequelize }  = require('../db');

class NivelConcluido extends Model { }

NivelConcluido.init(
    {
        idnivelconcluido: {
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
        concluido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'niveisconcluidos'
    }
)

module.exports = NivelConcluido;