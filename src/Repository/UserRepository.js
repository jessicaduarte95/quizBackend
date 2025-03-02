const UserModel = require('../Model/UserModel');

class UserRepository {
    async findById(id) {
        return await UserModel.findById(id);
    };

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

    async updateUser(id, data) {
        return await UserModel.update(data, {
            where: {
              id: id.id
            }
        });
    }
}

module.exports = new UserRepository()