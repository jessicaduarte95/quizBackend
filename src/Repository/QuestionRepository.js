const QuestionsModel = require('../Model/QuestionsModel');

class QuestionRepository {
    async findAll(data) {
        return await QuestionsModel.findAll({
            where: data
        });
    };

    async createQuestion(data) {
        return await QuestionsModel.create(data);
    };
}

module.exports = new QuestionRepository()