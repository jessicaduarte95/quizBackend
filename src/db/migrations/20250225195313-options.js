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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id'
        }
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      option: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    })

    const generateOptions = (idQuestion, level, options) => {
      return options.map((opt, _) => ({
        idQuestion,
        level,
        option: opt.text,
        correct: opt.correct
      }));
    };

    //Options Level 1
    const optionsLevelOne = [
      ...generateOptions(1, 1, [
        { text: 'Terra', correct: false },
        { text: 'Saturno', correct: false },
        { text: 'Júpiter', correct: true },
        { text: 'Marte', correct: false },
      ]),
      ...generateOptions(2, 1, [
        { text: '5', correct: false },
        { text: '8', correct: true },
        { text: '10', correct: false },
        { text: '7', correct: false },
      ]),
      ...generateOptions(3, 1, [
        { text: '1', correct: false },
        { text: '2', correct: false },
        { text: '3', correct: false },
        { text: '4', correct: true },
      ]),
      ...generateOptions(4, 1, [
        { text: 'Mercúrio', correct: true },
        { text: 'Marte', correct: false },
        { text: 'Vênus', correct: false },
        { text: 'Terra', correct: false },
      ]),
      ...generateOptions(5, 1, [
        { text: 'Oxigênio', correct: false },
        { text: 'Nitrogênio', correct: true },
        { text: 'Carbônico', correct: false },
        { text: 'Ozônio', correct: false },
      ]),
      ...generateOptions(6, 1, [
        { text: 'Via-Láctea', correct: true },
        { text: 'Andrômeda', correct: false },
        { text: 'Centaurus', correct: false },
        { text: 'Triângulo', correct: false },
      ]),
      ...generateOptions(7, 1, [
        { text: 'Vênus', correct: false },
        { text: 'Marte', correct: false },
        { text: 'Mercúrio', correct: true },
        { text: 'Terra', correct: false },
      ]),
      ...generateOptions(8, 1, [
        { text: 'Terra', correct: false },
        { text: 'Saturno', correct: true },
        { text: 'Vênus', correct: false },
        { text: 'Marte', correct: false },
      ]),
      ...generateOptions(9, 1, [
        { text: 'Saturno', correct: true },
        { text: 'Terra', correct: false },
        { text: 'Urano', correct: false },
        { text: 'Netuno', correct: false },
      ]),
      ...generateOptions(10, 1, [
        { text: 'Newton', correct: false },
        { text: 'Stephen Hawking', correct: false },
        { text: 'Galileu Galilei', correct: false },
        { text: 'Albert Einstein', correct: true },
      ]),
    ];

    //Options Level 2
    const optionsLevelTwo = [
      ...generateOptions(1, 2, [
        { text: 'Galileu Galilei', correct: false },
        { text: 'Nicolau Copérnico', correct: true },
        { text: 'Newton', correct: false },
        { text: 'Aristóteles', correct: false },
      ]),
      ...generateOptions(2, 2, [
        { text: 'Azul', correct: false },
        { text: 'Violeta', correct: false },
        { text: 'Amarelo', correct: false },
        { text: 'Vermelho', correct: true },
      ]),
      ...generateOptions(3, 2, [
        { text: 'Marte', correct: false },
        { text: 'Vênus', correct: false },
        { text: 'Urano', correct: false },
        { text: 'Júpiter', correct: true },
      ]),
      ...generateOptions(4, 2, [
        { text: 'Valentina Tereshkova', correct: true },
        { text: 'Sally Ride', correct: false },
        { text: 'Zena Cardman', correct: false },
        { text: 'Anna Kikina', correct: false },
      ]),
      ...generateOptions(5, 2, [
        { text: '30 minutos', correct: false },
        { text: '8 minutos', correct: true },
        { text: '1 dia', correct: false },
        { text: '8 horas', correct: false },
      ]),
      ...generateOptions(6, 2, [
        { text: 'Paleontólogo', correct: true },
        { text: 'Geólogo', correct: false },
        { text: 'Físico', correct: false },
        { text: 'Químico', correct: false },
      ]),
      ...generateOptions(7, 2, [
        { text: '-100,25 °C', correct: false },
        { text: '0°C', correct: false },
        { text: '-50°C', correct: false },
        { text: '-273,15°C', correct: true },
      ]),
      ...generateOptions(8, 2, [
        { text: 'Núcleo', correct: true },
        { text: 'Manto', correct: false },
        { text: 'Superfície', correct: false },
        { text: 'Crosta', correct: false },
      ]),
      ...generateOptions(9, 2, [
        { text: 'Mauna Kea', correct: false },
        { text: 'Pico da Neblina', correct: false },
        { text: 'Monte Everest', correct: true },
        { text: 'Dhaulagiri', correct: false },
      ]),
      ...generateOptions(10, 2, [
        { text: '365 dias', correct: false },
        { text: '24 horas', correct: true },
        { text: '7 dias', correct: false },
        { text: '30 dias', correct: false },
      ]),
    ];

    await queryInterface.bulkInsert('options', optionsLevelOne); 
    await queryInterface.bulkInsert('options', optionsLevelTwo);

  },

  async down (queryInterface) {
    await queryInterface.dropTable('options');
  }
};
