const Questoes = require('../Repository/questoes');

const obterPerguntas = async(req, res) => {
    const data = req.body;
    await Questoes.obterPerguntas(data)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
};

const obterOpcoes = async(req, res) => {
  
    const data = req.body;
    await Questoes.obterOpcoes(data)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

module.exports = {
    obterPerguntas,
    obterOpcoes
}