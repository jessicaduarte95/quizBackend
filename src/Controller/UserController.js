const UserService = require('../Service/UserService');

class UserController {

    async getUser(req, res) {
        try {
            const body = req.body;
            const result = await UserService.getUser(body);
            return res.status(200).json({ message: "got_user", result });
        } catch (error) {
            return res.status(500).json({ message: error.message || "error_got_user" });
        }
    }
    
    async createUser(req, res) {
        try {
            const body = req.body;
            const result = await UserService.createUser(body);
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
            const loginUser = await UserService.login(data)
            return res.status(200).json(loginUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao realizar o login!' });
        }
    }

    async changePassword(req, res) {
        const data = req.body;

        try {
            await UserService.changePassword(data);
            return res.status(200).json();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar a senha!' });
        }
    }
}

module.exports = UserController