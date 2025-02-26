const { DataTypes, Model } = require('sequelize');
const { sequelize }        = require('../db/db')

class UserModel extends Model { }

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'users',
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    }
)
module.exports = UserModel;