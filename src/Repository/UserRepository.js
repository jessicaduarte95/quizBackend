const UserModel = require('../Model/UserModel');

class UserRepository {
    async countUser(data) {
        return await UserModel.count({
            where: {
                email: data.email
            }
        });
    };

    async createUser(data) {
        return await UserModel.create(data);
    };
}

module.exports = new UserRepository()