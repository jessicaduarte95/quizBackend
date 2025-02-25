const { Sequelize } = require('sequelize');
const dbConfig = require('config').get('database');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = { sequelize, connect };