const Questoes = require('../Model/questoes');
const Opcoes = require('../Model/opcoes');

const obterPerguntas = async(data) => {
   
    const obter = await Questoes.findAll({
        where: {
            nivel: data.nivel
        }
    })
    return obter;
};

const obterOpcoes = async(data) => {
  
    const opcoes = await Opcoes.findAll({
        where: {
            nivel: 1, 
            idquestao: 1
        }
    })
    return opcoes;
}

module.exports = {
    obterPerguntas,
    obterOpcoes
}