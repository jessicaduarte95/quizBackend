const QuestionService = require('../Service/QuestionService');
const questionService = new QuestionService();

class QuestionController {

    async getQuestionsLevel(req, res) {
        const data = req.body;

        try {
            const questions = await questionService.getQuestionsLevel(data);
            res.status(200).json(questions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar perguntas!' });
        }
    }

    async insertQuestion(req, res) {
        const data = req.body;
        try {
            await questionService.insertQuestion(data);
            res.status(201).json();
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao inserir uma nova pergunta' })
        }
    }
}

module.exports = QuestionController;