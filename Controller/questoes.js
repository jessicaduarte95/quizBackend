const Questoes = require('../Repository/questoes');

const obterQuestoes = async(req, res) => {
    await Questoes.obterQuestoes()
    .then((response) => res.json(response))
    .catch((error) => console.log(error))
};

module.exports = {
    obterQuestoes
}