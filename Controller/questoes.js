const Questoes = require('../Repository/questoes');

const obterPerguntas = async(req, res) => {
    const data = req.body;
    await Questoes.obterPerguntas(data)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
};

const obterOpcoes = async(req, res) => {
    console.log("Controller");
    const data = req.body;
    console.log("data: ", data);

    await Questoes.obterOpcoes(data)
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
}

module.exports = {
    obterPerguntas,
    obterOpcoes
}