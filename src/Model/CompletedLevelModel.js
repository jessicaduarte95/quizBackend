const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class CompletedLevelModel extends Model { }

CompletedLevelModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'completed_level',
        freezeTableName: true,
        indexes: [
            {
                fields: ['idUser']
            }
        ]
    }
)
module.exports = CompletedLevelModel;