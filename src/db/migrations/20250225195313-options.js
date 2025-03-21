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

    //Options Level 3
    const optionsLevelThree = [
      ...generateOptions(1, 3, [
        { text: '100 Km/s', correct: false },
        { text: '200 Km/s', correct: false },
        { text: '400 Km/s', correct: false },
        { text: '300 Km/s', correct: true },
      ]),
      ...generateOptions(2, 3, [
        { text: 'Apollo 1', correct: false },
        { text: 'Apollo 17', correct: false },
        { text: 'Apollo 11', correct: true },
        { text: 'Apollo 4', correct: false },
      ]),
      ...generateOptions(3, 3, [
        { text: 'Neil Armstrong', correct: true },
        { text: 'Alan Bean', correct: false },
        { text: 'Eugene Cernan', correct: false },
        { text: 'Charles Duke', correct: false },
      ]),
      ...generateOptions(4, 3, [
        { text: 'Eclipse Solar', correct: false },
        { text: 'Encontro de Lua', correct: false },
        { text: 'Eclipse Lunar', correct: true },
        { text: 'Encontro do Sol', correct: false },
      ]),
      ...generateOptions(5, 3, [
        { text: 'Chuva de Meteoros', correct: false },
        { text: 'Aurora Boreal', correct: true },
        { text: 'Aurora Austral', correct: false },
        { text: 'Eclipse', correct: false },
      ]),
      ...generateOptions(6, 3, [
        { text: 'Força da Gravidade', correct: false },
        { text: 'Horizonte de eventos', correct: true },
        { text: 'Galáxia', correct: false },
        { text: 'Fronteira do Universo', correct: false },
      ]),
      ...generateOptions(7, 3, [
        { text: 'Onda eletromagnética', correct: false },
        { text: 'Partícula', correct: false },
        { text: 'Onda e Partícula', correct: true },
        { text: 'Próton', correct: false },
      ]),
      ...generateOptions(8, 3, [
        { text: 'Max Planck', correct: true },
        { text: 'Albert Einstein', correct: false },
        { text: 'Thomson', correct: false },
        { text: 'Ernest Rutherford', correct: false },
      ]),
      ...generateOptions(9, 3, [
        { text: 'Meteoros', correct: false },
        { text: 'Meteoritos', correct: false },
        { text: 'Estrela', correct: false },
        { text: 'Buraco Negro', correct: true },
      ]),
      ...generateOptions(10, 3, [
        { text: 'Pierre Curie', correct: false },
        { text: 'Marie Curie', correct: true },
        { text: 'Linus Pauling', correct: false },
        { text: 'Niels Bohr', correct: false },
      ]),
    ];

    //Options Level 4
    const optionsLevelFour = [
      ...generateOptions(1, 4, [
        { text: 'Energia Cinética', correct: true },
        { text: 'Energia Potencial', correct: false },
        { text: 'Energia Química', correct: false },
        { text: 'Energia Nuclear', correct: false },
      ]),
      ...generateOptions(2, 4, [
        { text: 'Estrelas', correct: false },
        { text: 'Plasma', correct: true },
        { text: 'Gelo', correct: false },
        { text: 'Vapor', correct: false },
      ]),
      ...generateOptions(3, 4, [
        { text: 'Condensação', correct: false },
        { text: 'Solidificação', correct: false },
        { text: 'Fusão', correct: false },
        { text: 'Vaporização', correct: true },
      ]),
      ...generateOptions(4, 4, [
        { text: 'Rota', correct: false },
        { text: 'Caminho', correct: false },
        { text: 'Órbita', correct: true },
        { text: 'Passagem', correct: false },
      ]),
      ...generateOptions(5, 4, [
        { text: 'Terra', correct: false },
        { text: 'Sol', correct: true },
        { text: 'Água', correct: false },
        { text: 'Nuvens', correct: false },
      ]),
      ...generateOptions(6, 4, [
        { text: 'Vênus', correct: true },
        { text: 'Marte', correct: false },
        { text: 'Mercúrio', correct: false },
        { text: 'Netuno', correct: false },
      ]),
      ...generateOptions(7, 4, [
        { text: 'Terra e Marte', correct: false },
        { text: 'Mercúrio e Vênus', correct: false },
        { text: 'Saturno e Urano', correct: false },
        { text: 'Marte e Júpiter', correct: true },
      ]),
      ...generateOptions(8, 4, [
        { text: 'Força eletromagnética', correct: false },
        { text: 'Força gravitacional', correct: true },
        { text: 'Força de atrito', correct: false },
        { text: 'Força de tensão', correct: false },
      ]),
      ...generateOptions(9, 4, [
        { text: 'Estrela', correct: false },
        { text: 'Matéria', correct: true },
        { text: 'Átomos', correct: false },
        { text: 'Galáxia', correct: false },
      ]),
      ...generateOptions(10, 4, [
        { text: 'Liberação energética', correct: false },
        { text: 'Meteoro', correct: false },
        { text: 'Explosões de supernovas', correct: true },
        { text: 'Meteorito', correct: false },
      ]),
    ];

    //Options Level 5
    const optionsLevelFive = [
      ...generateOptions(1, 5, [
        { text: 'Meteorito', correct: true },
        { text: 'Meteoro', correct: false },
        { text: 'Satélite', correct: false },
        { text: 'Planeta', correct: false },
      ]),
      ...generateOptions(2, 5, [
        { text: 'Hidrogênio e Carbono', correct: false },
        { text: 'Enxofre e Hidrogênio', correct: false },
        { text: 'Hélio e Ferro', correct: false },
        { text: 'Hidrogênio e Hélio', correct: true },
      ]),
      ...generateOptions(3, 5, [
        { text: 'Líquido', correct: false },
        { text: 'Gasoso', correct: false },
        { text: 'Plasma', correct: true },
        { text: 'Sólido', correct: false },
      ]),
      ...generateOptions(4, 5, [
        { text: 'Irídio', correct: true },
        { text: 'Ferro', correct: false },
        { text: 'Sódio', correct: false },
        { text: 'Hidrogênio', correct: false },
      ]),
      ...generateOptions(5, 5, [
        { text: 'Velocidade e gravidade', correct: true },
        { text: 'Força', correct: false },
        { text: 'Partícula e Massa', correct: false },
        { text: 'Luz', correct: false },
      ]),
      ...generateOptions(6, 5, [
        { text: 'Planck', correct: false },
        { text: 'Albert Einstein', correct: false },
        { text: 'Isaac Newton', correct: true },
        { text: 'Erwin Schrödinger', correct: false },
      ]),
      ...generateOptions(7, 5, [
        { text: 'Ferro', correct: false },
        { text: 'Boro', correct: false },
        { text: 'Lítio', correct: false },
        { text: 'Carbono', correct: true },
      ]),
      ...generateOptions(8, 5, [
        { text: 'Matéria escura', correct: true },
        { text: 'Buracos Negros,', correct: false },
        { text: 'Estrelas', correct: false },
        { text: 'Satélites', correct: false },
      ]),
      ...generateOptions(9, 5, [
        { text: 'Or', correct: false },
        { text: 'Au', correct: true },
        { text: 'Ou', correct: false },
        { text: 'Ar', correct: false },
      ]),
      ...generateOptions(10, 5, [
        { text: 'Cometa', correct: true },
        { text: 'Estrela', correct: false },
        { text: 'Satélite', correct: false },
        { text: 'Meteorito', correct: false },
      ]),
    ];

    //Options Level 6
    const optionsLevelSix = [
      ...generateOptions(1, 6, [
        { text: 'Spitzer', correct: false },
        { text: 'Chandra', correct: false },
        { text: 'James Webb', correct: true },
        { text: 'Hubble', correct: false },
      ]),
      ...generateOptions(2, 6, [
        { text: 'Estrelas', correct: false },
        { text: 'Galáxia', correct: true },
        { text: 'Buraco negro', correct: false },
        { text: 'Supernova', correct: false },
      ]),
      ...generateOptions(3, 6, [
        { text: 'Exoplanetas', correct: true },
        { text: 'Satélites', correct: false },
        { text: 'Nebulosa', correct: false },
        { text: 'Estrelas', correct: false },
      ]),
      ...generateOptions(4, 6, [
        { text: 'Galáxia', correct: false },
        { text: 'Satélites', correct: false },
        { text: 'Estrelas', correct: true },
        { text: 'Supernova', correct: false },
      ]),
      ...generateOptions(5, 6, [
        { text: 'Estrela', correct: false },
        { text: 'Cometa', correct: false },
        { text: 'Sol', correct: false },
        { text: 'Lua', correct: true },
      ]),
      ...generateOptions(6, 6, [
        { text: 'Buraco de minhoca', correct: true },
        { text: 'Energia escura', correct: false },
        { text: 'Supernova', correct: false },
        { text: 'Ondas gravitacionais', correct: false },
      ]),
      ...generateOptions(7, 6, [
        { text: 'Hl', correct: false },
        { text: 'H', correct: false },
        { text: 'Ho', correct: false },
        { text: 'He', correct: true },
      ]),
      ...generateOptions(8, 6, [
        { text: 'Astronomia', correct: false },
        { text: 'Astrologia,', correct: false },
        { text: 'Astrobiologia', correct: true },
        { text: 'Astrofísica', correct: false },
      ]),
      ...generateOptions(9, 6, [
        { text: 'Índia', correct: false },
        { text: 'China', correct: true },
        { text: 'Coréia do sul', correct: false },
        { text: 'Alemanha', correct: false },
      ]),
      ...generateOptions(10, 6, [
        { text: 'Matéria', correct: false },
        { text: 'Antimatéria', correct: true },
        { text: 'Partícula', correct: false },
        { text: 'Molécula', correct: false },
      ]),
    ];

    //Options Level 7
    const optionsLevelSeven = [
      ...generateOptions(1, 7, [
        { text: '70', correct: true },
        { text: '60', correct: false },
        { text: '80', correct: false },
        { text: '40', correct: false },
      ]),
      ...generateOptions(2, 7, [
        { text: 'Árvores', correct: false },
        { text: 'Atmosfera', correct: false },
        { text: 'Plantas', correct: true },
        { text: 'Bactérias', correct: false },
      ]),
      ...generateOptions(3, 7, [
        { text: 'Europa', correct: false },
        { text: 'Calisto', correct: false },
        { text: 'Leda', correct: false },
        { text: 'Ganimedes', correct: true },
      ]),
      ...generateOptions(4, 7, [
        { text: 'Luz', correct: false },
        { text: 'Som', correct: true },
        { text: 'Ondas de rádio', correct: false },
        { text: 'Ondas de infravermelho', correct: false },
      ]),
      ...generateOptions(5, 7, [
        { text: '80%', correct: false },
        { text: '71%', correct: true },
        { text: '79%', correct: false },
        { text: '65%', correct: false },
      ]),
      ...generateOptions(6, 7, [
        { text: 'Entropia', correct: true },
        { text: 'Princípio da incerteza', correct: false },
        { text: 'Efeito fotoelétrico', correct: false },
        { text: 'Bagunça', correct: false },
      ]),
      ...generateOptions(7, 7, [
        { text: 'Elétrons', correct: false },
        { text: 'Prótons', correct: false },
        { text: 'Neutrinos', correct: true },
        { text: 'Bósons', correct: false },
      ]),
      ...generateOptions(8, 7, [
        { text: 'Luz', correct: false },
        { text: 'Fóton,', correct: true },
        { text: 'Átomo', correct: false },
        { text: 'Elétron', correct: false },
      ]),
      ...generateOptions(9, 7, [
        { text: '2012', correct: true },
        { text: '2017', correct: false },
        { text: '2010', correct: false },
        { text: '2015', correct: false },
      ]),
      ...generateOptions(10, 7, [
        { text: 'Teoria da Força Eletromagnética', correct: false },
        { text: 'Teoria da Força Nuclear', correct: false },
        { text: 'Teoria das Forças', correct: false },
        { text: 'Teoria Unificada das Forças', correct: true },
      ]),
    ];

    //Options Level 8
    const optionsLevelEight = [
      ...generateOptions(1, 8, [
        { text: 'Estrela anã branca', correct: false },
        { text: 'Estrela anã marrom', correct: false },
        { text: 'Estrela de nêutrons', correct: true },
        { text: 'Estrela anã vermelha', correct: false },
      ]),
      ...generateOptions(2, 8, [
        { text: 'Horizonte de Eventos', correct: false },
        { text: 'Espaço-tempo', correct: false },
        { text: 'Centro gravitacional', correct: false },
        { text: 'Singularidade', correct: true },
      ]),
      ...generateOptions(3, 8, [
        { text: 'Azul', correct: true },
        { text: 'Vermelha', correct: false },
        { text: 'Violeta', correct: false },
        { text: 'Laranja', correct: false },
      ]),
      ...generateOptions(4, 8, [
        { text: 'Estrela', correct: false },
        { text: 'Poeira Cósmica', correct: true },
        { text: 'Cometa', correct: false },
        { text: 'Meteorito', correct: false },
      ]),
      ...generateOptions(5, 8, [
        { text: 'Hidrogênio', correct: true },
        { text: 'Carbono', correct: false },
        { text: 'Oxigênio', correct: false },
        { text: 'Ferro', correct: false },
      ]),
      ...generateOptions(6, 8, [
        { text: '5,5 bilhões', correct: false },
        { text: '6 bilhões', correct: false },
        { text: '4,5 bilhões', correct: true },
        { text: '7 bilhões', correct: false },
      ]),
      ...generateOptions(7, 8, [
        { text: 'Albert Einstein', correct: true },
        { text: 'Max Planck', correct: false },
        { text: 'Schrödinger', correct: false },
        { text: 'Heisenberg', correct: false },
      ]),
      ...generateOptions(8, 8, [
        { text: 'Física Nuclear', correct: false },
        { text: 'Mecânica quântica,', correct: false },
        { text: 'Astrofísica', correct: false },
        { text: 'Termodinâmica', correct: true },
      ]),
      ...generateOptions(9, 8, [
        { text: 'Mercúrio', correct: false },
        { text: 'Júpiter', correct: true },
        { text: 'Vênus', correct: false },
        { text: 'Terra', correct: false },
      ]),
      ...generateOptions(10, 8, [
        { text: '4', correct: false },
        { text: '3', correct: false },
        { text: '10', correct: true },
        { text: '8', correct: false },
      ]),
    ];

    await queryInterface.bulkInsert('options', optionsLevelOne); 
    await queryInterface.bulkInsert('options', optionsLevelTwo);
    await queryInterface.bulkInsert('options', optionsLevelThree);
    await queryInterface.bulkInsert('options', optionsLevelFour);
    await queryInterface.bulkInsert('options', optionsLevelFive);
    await queryInterface.bulkInsert('options', optionsLevelSix);
    await queryInterface.bulkInsert('options', optionsLevelSeven);
    await queryInterface.bulkInsert('options', optionsLevelEight);

  },

  async down (queryInterface) {
    await queryInterface.dropTable('options');
  }
};
