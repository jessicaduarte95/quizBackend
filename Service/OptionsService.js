const Options = require('../Model/opcoes');

class OptionsService {
    getOptionsQuestions(data) {
        const option = data.perguntaAtual + 1
        return Options.findAll({
            where: {
                nivel: 1,
                idquestao: option
            }
        })
    }

    insertOptions(data) {
        console.log("Chegou: ",data);
    }
}

module.exports = OptionsService;