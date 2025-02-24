const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db')

class Usuarios extends Model { }

Usuarios.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'usuarios',
    }
)
module.exports = Usuarios;