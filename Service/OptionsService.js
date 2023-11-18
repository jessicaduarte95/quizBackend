const Options = require('../Model/opcoes');
const sequelize = require('../db');

class OptionsService {
    getOptionsQuestions(data) {
        let option;

        if (data.level[0].nivel == 1) {
            option = data.perguntaAtual + 1;
        } else if(data.level[0].nivel == 2){
            if(data.perguntaAtual + 1 < 10){
                let questionOptions = data.perguntaAtual + 1;
                let number = 1;
                option = number.toString() + questionOptions.toString();
            } else {
                option = 20;
            }
        }

        return Options.findAll({
            where: {
                nivel: data.level[0].nivel,
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