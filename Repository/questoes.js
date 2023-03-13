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

    const opcao = data.perguntaAtual + 1
    
    const opcoes = await Opcoes.findAll({
        where: {
            nivel: 1, 
            idquestao: opcao
        }
    })
    return opcoes;
}

module.exports = {
    obterPerguntas,
    obterOpcoes
}