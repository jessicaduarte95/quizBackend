// Repository
const QuestionRepository     = require('../Repository/QuestionRepository');

//Validator
const { 
    findQuestionByLevel,
    create }                 = require('../Validators/QuestionValidator');

class QuestionService {
    async getQuestionsLevel(body) {
        try {
            // Data input validation
            const { error, value } = findQuestionByLevel.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Got questions
            const result = await QuestionRepository.findAll({
                level: value.level
            })
            if(!result) {
                throw new Error('question_not_found');
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async insertQuestion(body) {
        try {
            // Data input validation
            const { error, value } = create.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Insert question
            const result = await QuestionRepository.createQuestion(value);

            if(!result) {
                throw new Error('created_question_failed');
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new QuestionService();