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

    async insertQuestion(data) {
        const { nivel, pergunta } = data
        
        if (data.nivel != '' && data.pergunta != '') {
            await Question.create({
                nivel,
                pergunta
            })
        }
        return data
    }
}

module.exports = QuestionService;