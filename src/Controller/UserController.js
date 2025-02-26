const UserService = require('../Service/UserService');
const userService = new UserService();

class UserController {

    async createUser(req, res) {
        try {
            const body = req.body;
            const result = await userService.createUser(body);
            return res.status(201).json({ message: "user_created_successfully", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_created_user",
                error: error.toString()
            });
        }
    }

    async login(req, res) {
        const data = req.body;

        try {
            const loginUser = await userService.login(data)
            return res.status(200).json(loginUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao realizar o login!' });
        }
    }

    async checkUser(req, res) {
        const data = req.body;

        try {
            const checkUser = await userService.checkUser(data);
            return res.status(200).json(checkUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao checar email!' });
        }
    }

    async changePassword(req, res) {
        const data = req.body;

        try {
            await userService.changePassword(data);
            return res.status(200).json();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar a senha!' });
        }
    }
}

module.exports = UserController