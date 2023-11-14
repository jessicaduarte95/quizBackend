const Options = require('../Model/opcoes');
const sequelize = require('../db');

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

    async insertOptions(data) {
        const arrayOptions = data.options;

        try {
            await Options.create({
                idquestao: data.questionOptions,
                nivel: data.nivelOptions,
                correta: arrayOptions[0].correct1,
                opcao: arrayOptions[0].option1
            });

            await Options.create({
                idquestao: data.questionOptions,
                nivel: data.nivelOptions,
                correta: arrayOptions[1].correct2,
                opcao: arrayOptions[1].option2
            });

            await Options.create({
                idquestao: data.questionOptions,
                nivel: data.nivelOptions,
                correta: arrayOptions[2].correct3,
                opcao: arrayOptions[2].option3
            });

            await Options.create({
                idquestao: data.questionOptions,
                nivel: data.nivelOptions,
                correta: arrayOptions[3].correct4,
                opcao: arrayOptions[3].option4
            });
            return;

        } catch (error) {
            console.error('Erro durante a transação:', error);
        }
    }
}

module.exports = OptionsService;