'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('questions');
  }
};
