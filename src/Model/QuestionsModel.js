const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class QuestionsModel extends Model { }

QuestionsModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'questions',
    }
)
module.exports = QuestionsModel;