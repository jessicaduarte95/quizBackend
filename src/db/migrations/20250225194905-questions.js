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

      //Level 5
      {
        "level": 5,
        "question": `É um fenômeno astronômico que ocorre quando um fragmento de rocha espacial entra na atmosfera terrestre a uma velocidade extremamente alta, atingindo a superfície da Terra: `,
      },
      {
        "level": 5,
        "question": "Quais são os dois principais elementos que compõem o Sol?",
      },
      {
        "level": 5,
        "question": "Qual é o estado físico do sol?",
      },
      {
        "level": 5,
        "question": "Qual elemento químico é muito raro no planeta Terra, devido à sua baixa abundância na crosta terrestre?",
      },
      {
        "level": 5,
        "question": "A teoria da relatividade, mostra que o tempo não é absoluto, mas sim relativo, dependendo de quais fatores?",
      },
      {
        "level": 5,
        "question": "Quem foi responsável pelo desenvolvimento da mecânica clássica?",
      },
      {
        "level": 5,
        "question": "Qual elemento é utilizado para datar ossos em estudos arqueológicos e paleontológicos?",
      },
      {
        "level": 5,
        "question": "Componente do universo que constitui a maior parte da matéria total do universo, mas não emite, absorve ou reflete luz:",
      },
      {
        "level": 5,
        "question": "Qual é o símbolo químico do ouro na tabela periódica?",
      },
      {
        "level": 5,
        "question": "Qual é o nome do corpo celeste composto principalmente por gelo, poeira e rocha que orbita o Sol e forma uma cauda quando se aproxima do Sol?",
      },

      //Level 6
      {
        "level": 6,
        "question": "Qual é o Telescópio que tem demonstrado grande evolução na atualidade?",
      },
      {
        "level": 6,
        "question": "O que é um grande sistema de estrelas, gás interestelar, poeira cósmica e matéria escura ligada pela gravidade?",
      },
      {
        "level": 6,
        "question": "O que são planetas que orbitam estrelas fora do nosso sistema solar?",
      },
      {
        "level": 6,
        "question": "O que é um objeto celeste composto principalmente de hidrogênio e hélio que brilha devido à fusão nuclear em seu núcleo?",
      },
      {
        "level": 6,
        "question": "O que é um corpo celeste que orbita um planeta, variando em tamanho, forma e composição?",
      },
      {
        "level": 6,
        "question": `O que  é uma hipotética estrutura no espaço-tempo que pode conectar duas regiões distantes do universo, teoricamente, poderiam servir como atalhos para viagens interestelares?`,
      },
      {
        "level": 6,
        "question": "Qual é o símbolo químico do hélio na tabela periódica?",
      },
      {
        "level": 6,
        "question": "Qual é o campo da ciência que busca entender a origem, evolução, distribuição e futuro da vida no universo?",
      },
      {
        "level": 6,
        "question": "Os viajantes espaciais dos Estados Unidos são chamados de astronautas. Da Rússia, eles são chamados de cosmonautas. De onde são os taikonautas?",
      },
      {
        "level": 6,
        "question": "É uma forma de matéria composta de antipartículas, que são partículas que possuem as mesmas massas, mas com cargas elétricas e outras propriedades físicas opostas:",
      },

      //Level 7
      {
        "level": 7,
        "question": "Quantos países têm agências espaciais?",
      },
      {
        "level": 7,
        "question": "Qual é a principal fonte de produção do oxigênio na Terra?",
      },
      {
        "level": 7,
        "question": "Qual é o nome da maior lua de Júpiter?",
      },
      {
        "level": 7,
        "question": "É capaz de viajar mais rápido pela água do que pelo ar:",
      },
      {
        "level": 7,
        "question": "Qual é a porcentagem aproximada da superfície da Terra que é coberta por água?",
      },
      {
        "level": 7,
        "question": "Qual é o termo que pode ser definido como uma medida de desordem, aleatoriedade ou incerteza em um sistema?",
      },
      {
        "level": 7,
        "question": "Qual é o nome das partículas que possuem carga elétrica neutra e uma massa muito pequena?",
      },
      {
        "level": 7,
        "question": "Qual é o nome da partícula elementar que constitui a menor unidade de luz, sendo considerado o quantum (ou pacote) de energia?",
      },
      {
        "level": 7,
        "question": "Quando foi anunciada a descoberta do Bóson de Higgs?",
      },
      {
        "level": 7,
        "question": "Qual é o nome da teoria que busca explicar todas as forças fundamentais da natureza em um único quadro teórico coerente?",
      },

      //Level 8
      {
        "level": 8,
        "question": "Qual é o nome do corpo celeste, decorrente de uma explosão de supernova, com um intenso campo magnético?",
      },
      {
        "level": 8,
        "question": "Qual é o nome do centro de um buraco negro, onde a luz é incapaz de sair?",
      },
      {
        "level": 8,
        "question": "Qual é a coloração das estrelas mais quentes do universo?",
      },
      {
        "level": 8,
        "question": "O que são pequenas partículas de matéria encontradas no espaço interestelar e intergaláctico?",
      },
      {
        "level": 8,
        "question": "Qual é o elemento mais abundante do universo?",
      },
      {
        "level": 8,
        "question": "Há quantos bilhões de anos, aproximadamente, a terra foi formada?",
      },
      {
        "level": 8,
        "question": "Quem é conhecido como o pai da física quântica?",
      },
      {
        "level": 8,
        "question": "Qual é o ramo da física que estuda as relações entre calor, trabalho e outras formas de energia em sistemas físicos?",
      },
      {
        "level": 8,
        "question": "Entre os planetas do nosso sistema solar, qual deles possui a rotação mais rápida em torno de seu próprio eixo?",
      },
      {
        "level": 8,
        "question": "A teoria conhecida como superstring (supercorda) propõe a existência de quantas dimensões espaciais?",
      },
    ])
  },

  async down (queryInterface) {
    await queryInterface.dropTable('questions');
  }
};
