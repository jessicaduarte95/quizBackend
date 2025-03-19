const CompletedLevelModel = require('../Model/CompletedLevelModel');

class CompletedLevelRepository {
    async findAll(data) {
        return await CompletedLevelModel.findAll({
            where: data
        });
    };

    async createCompletedLevels(data) {
        return await CompletedLevelModel.create(data);
    };
}

module.exports = new CompletedLevelRepository()