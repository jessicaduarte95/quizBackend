const Questoes = require('../Model/questoes');

const obterQuestoes = async() => {
    const obter = await Questoes.findAll()
    return obter;
};

module.exports = {
    obterQuestoes
}