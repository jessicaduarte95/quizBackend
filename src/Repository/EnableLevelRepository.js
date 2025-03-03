const EnableLevelModel = require('../Model/EnableLevelModel');

class EnableLevelRepository {
    async findAll(data) {
        return await EnableLevelModel.findAll({
            where: data
        });
    };

    async createEnableLevel(data) {
        return await EnableLevelModel.create(data);
    };
}

module.exports = new EnableLevelRepository()