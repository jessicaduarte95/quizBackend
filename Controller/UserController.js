const UserService = require('../Service/UserService');
const userService = new UserService();

class UserController {

    async createUser(req, res) {
        const data = req.body;

        try {
            const user = await userService.createUser(data);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao cadastrar usuário!' });
        }
    }

    async login(req, res) {
        const data = req.body;

        try {
            const loginUser = await userService.login(data)
            res.status(201).json(loginUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao realizar o login!' });
        }
    }
}

module.exports = UserController