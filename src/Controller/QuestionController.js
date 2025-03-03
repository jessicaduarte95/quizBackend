const QuestionService = require('../Service/QuestionService');

class QuestionController {

    async getQuestionsLevel(req, res) {
        try {
            const body = req.body;
            const result = await QuestionService.getQuestionsLevel(body);
            res.status(200).json({ message: "got_question_level", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_got_question",
                error: error.toString()
            });
        }
    }

    async insertQuestion(req, res) {
        try {
            const body = req.body;
            const result = await QuestionService.insertQuestion(body);
            res.status(201).json({ message: "question_created_successfully", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_created_question",
                error: error.toString()
            });
        }
    }
}

module.exports = QuestionController;