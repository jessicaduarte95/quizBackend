const OptionsModel = require('../Model/OptionsModel');

class OptionsRepository {
    async findAll(data) {
        return await OptionsModel.findAll({
            where: data
        });
    };

    async createQuestion(data) {
        return await OptionsModel.create(data);
    };
}

module.exports = new OptionsRepository()