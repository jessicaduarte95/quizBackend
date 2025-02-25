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

    async insertQuestion(data) {
        const { id, nivel, pergunta } = data

        if (data.nivel != '' && data.pergunta != '') {
            await Question.create({
                idquestao: id,
                nivel,
                pergunta
            })
        }
        return;
    }
}

module.exports = QuestionService;