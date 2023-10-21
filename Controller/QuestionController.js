const QuestionService = require('../Service/QuestionService');
const questionService = new QuestionService();

class QuestionController {

    async getQuestionsLevel(req, res) {
        const data = req.body;

        try {
            const questions = await questionService.getQuestionsLevel(data);
            res.status(201).json(questions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar perguntas!' });
        }
    }

    async getOptionsQuestions(req, res) {
        const data = req.body;

        try {
            const options = await questionService.getOptionsQuestions(data);
            res.status(201).json(options);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar opções de determinada pergunta!' });
        }
    }

    async insertQuestion(req, res) {
        const data = req.body;

        try {
            const insert = await questionService.insertQuestion(data);
            res.status(200).json(insert);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao inserir uma nova pergunta' })
        }
    }
}

module.exports = QuestionController;