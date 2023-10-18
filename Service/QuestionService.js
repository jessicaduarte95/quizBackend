const Question = require('../Model/questoes');
const Options = require('../Model/opcoes');

class QuestionService {
    getQuestionsLevel(data) {
        return Question.findAll({
            where: {
                nivel: data.nivel
            }
        })
    }

    getOptionsQuestions(data) {
        const option = data.perguntaAtual + 1
        return Options.findAll({
            where: {
                nivel: 1,
                idquestao: option
            }
        })
    }
}

module.exports = QuestionService;