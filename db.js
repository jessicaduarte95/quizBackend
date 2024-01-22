const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.Host,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = sequelize;