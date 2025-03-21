'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })

    await queryInterface.addIndex('users', ['email']);
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
