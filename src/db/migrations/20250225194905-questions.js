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

    await queryInterface.bulkInsert('questions', [
      // Level 1
      {
        "level": 1,
        "question": "Qual é o maior planeta do Sistema Solar?",

      },
      {
        "level": 1,
        "question": "Quantos planetas existem no Sistema Solar?",

      },
      {
        "level": 1,
        "question": "Quantos Planetas do Sistema Solar são planetas gasosos?",

      },
      {
        "level": 1,
        "question": "Qual planeta do Sistema Solar leva o menor tempo para completar a volta ao redor do sol?",

      },
      {
        "level": 1,
        "question": "Qual gás está mais presente na atmosfera da Terra:",

      },
      {
        "level": 1,
        "question": "Em qual galáxia está localizado o sistema solar?",

      },
      {
        "level": 1,
        "question": "Qual é o menor planeta do Sistema Solar?",

      },
      {
        "level": 1,
        "question": "Qual planeta possui anéis?",

      },
      {
        "level": 1,
        "question": "Qual planeta possui mais luas?",

      },
      {
        "level": 1,
        "question": "Quem foi o precursor da teoria da relatividade?",

      },

      // Level 2
      {
        "level": 2,
        "question": "Quem propôs que a Terra não fosse o centro do universo e que o sol estava no centro do nosso sistema solar?",

      },
      {
        "level": 2,
        "question": "Qual cor tem o maior comprimento de onda no espectro visível?",

      },
      {
        "level": 2,
        "question": "Qual planeta do sistema solar completa uma rotação inteira em apenas 10 horas?",

      },
      {
        "level": 2,
        "question": "Quem foi a primeira mulher a ir ao espaço?",

      },
      {
        "level": 2,
        "question": "Aproximadamente quanto tempo leva para a luz do sol atingir a Terra?",

      },
      {
        "level": 2,
        "question": "Qual é o nome da pessoa que estuda fósseis?",

      },
      {
        "level": 2,
        "question": "Qual é a temperatura de menor energia possível, ou seja, quando não há vibração das moléculas, em °C?",

      },
      {
        "level": 2,
        "question": "Qual é a camada mais interna da Terra?",

      },
      {
        "level": 2,
        "question": "Qual é a montanha mais alta do mundo?",

      },
      {
        "level": 2,
        "question": "Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",

      },

      // Level 3
      {
        "level": 3,
        "question": "Qual é, aproximadamente, a velocidade da luz?",
      },
      {
        "level": 3,
        "question": "Qual é o nome da missão que possibilitou a descida do homem na lua?",
      },
      {
        "level": 3,
        "question": "Qual é o nome do primeiro homem a pisar na lua?",
      },
      {
        "level": 3,
        "question": "Qual é o nome do fenômeno que ocorre quando o planeta Terra fica entre o sol e a lua?",
      },
      {
        "level": 3,
        "question": "Qual é o nome do fenômeno que ocorre no hemisfério norte e é caracterizado pela formação de luzes coloridas no céu?",
      },
      {
        "level": 3,
        "question": "Qual é o nome da fronteira do espaço-tempo, ou seja, a fronteira onde nada pode escapar do buraco negro?",
      },
      {
        "level": 3,
        "question": "O que é a luz?",
      },
      {
        "level": 3,
        "question": "Quem propôs que a energia da luz fosse emitida por pequenos ‘pacotes’ de energia, denominados quantum?",
      },
      {
        "level": 3,
        "question": "O que são matérias extremamente densas e que são capazes de distorcer o espaço-tempo?",
      },
      {
        "level": 3,
        "question": "Quem foi o único cientista da história premiado com os prêmios Nobel de Física e Química?",
      },

      //Level 4
      {
        "level": 4,
        "question": "Os estados físicos de uma matéria são determinados por quais fatores?",
      },
      {
        "level": 4,
        "question": "Além dos estados básicos da matéria (sólido, líquido e gasoso), qual outro estado é considerado um estado da matéria?",
      },
      {
        "level": 4,
        "question": "Como é chamado o processo no qual um líquido passa para o estado gasoso?",
      },
      {
        "level": 4,
        "question": "Qual é o termo usado para descrever o caminho que cada planeta segue enquanto gira em torno do Sol?",
      },
      {
        "level": 4,
        "question": "Em que lugar é possível encontrar o estado da matéria conhecido como plasma?",
      },
      {
        "level": 4,
        "question": "Qual planeta é conhecido como “Estrela Dalva”?",
      },
      {
        "level": 4,
        "question": "Entre quais planetas do Sistema Solar está localizado o Cinturão de Asteroides?",
      },
      {
        "level": 4,
        "question": "Qual é a força que mantém os planetas em suas órbitas ao redor do Sol?",
      },
      {
        "level": 4,
        "question": "Qual é a definição de tudo o que possui massa e ocupa lugar no universo?",
      },
      {
        "level": 4,
        "question": `Qual é o termo utilizado para descrever os eventos astronômicos que acontecem no final da vida de certas estrelas massivas, 
        marcados pela rápida liberação de uma grande quantidade de energia?`,
      },
    ])
  },

  async down (queryInterface) {
    await queryInterface.dropTable('questions');
  }
};
