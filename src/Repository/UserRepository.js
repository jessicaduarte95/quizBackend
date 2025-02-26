const UserModel = require('../Model/UserModel');

class UserRepository {
    async findOne(data) {
        return await UserModel.findOne({
            where: data
        });
    };

    async createUser(data) {
        return await UserModel.create(data);
    };

    async countUser(data) {
        return await UserModel.count({
            where: {
                email: data.email
            }
        });
    };
}

module.exports = new UserRepository()