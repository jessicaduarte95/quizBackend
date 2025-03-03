const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class EnableLevelModel extends Model { }

EnableLevelModel.init(
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
        enable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'enable_level',
        freezeTableName: true,
        indexes: [
            {
                fields: ['idUser']
            }
        ]
    }
)
module.exports = EnableLevelModel;