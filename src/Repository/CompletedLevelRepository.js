const CompletedLevelModel = require('../Model/CompletedLevelModel');

class CompletedLevelRepository {
    async findAll(data) {
        return await CompletedLevelModel.findAll({
            where: data
        });
    };
}

module.exports = new CompletedLevelRepository()