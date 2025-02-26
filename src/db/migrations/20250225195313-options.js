'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('options', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idQuestion: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'quetions',
          key: 'uuid'
        }
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      option: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('options');
  }
};
