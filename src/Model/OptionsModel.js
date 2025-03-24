const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class OptionsModel extends Model { }

OptionsModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        question: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        option: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'options',
        indexes: [
            {
                fields: ['idQuestion']
            }
        ]
    }
)
module.exports = OptionsModel;