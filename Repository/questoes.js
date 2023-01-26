const Questoes = require('../Model/questoes');

const obterPerguntas = async(data) => {
    console.log("Chegou o nivel: ", data.nivel);
    const obter = await Questoes.findAll({
        where: {
            nivel: data.nivel
        }
    })
    return obter;
};

module.exports = {
    obterPerguntas
}