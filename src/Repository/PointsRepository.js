const PointsModel = require('../Model/PointsModel');

class PointsRepository {
    async findAll(data) {
        return await PointsModel.findAll({
            where: data
        });
    };

    async createPoint(data) {
        return await PointsModel.create(data);
    };

    async updatePoints(data, filter) {
        return await PointsModel.update(data, {
            where: filter
        })
    };
}

module.exports = new PointsRepository()