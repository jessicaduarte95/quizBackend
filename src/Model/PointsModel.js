const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class PointsModel extends Model { }

PointsModel.init(
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
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'points_level',
        freezeTableName: true,
    }
)
module.exports = PointsModel;