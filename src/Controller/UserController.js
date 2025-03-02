const UserService = require('../Service/UserService');

class UserController {

    async getUser(req, res) {
        try {
            const body = req.body;
            const result = await UserService.getUser(body);
            return res.status(200).json({ message: "got_user", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_got_user",
                error: error.toString()
             });
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
        try {
            const body = req.body;
            const result = await UserService.login(body)
            return res.status(200).json({ message: "login_successfully", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_login",
                error: error.toString() 
            });
        }
    }

    async updatePassword(req, res) {
        try {
            const body = req.body;
            const id = req.params;
            await UserService.updatePassword(body, id);
            return res.status(200).json({ message: "password_updated_successfully" });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_updated_password",
                error: error.toString()
             });
        }
    }
}

module.exports = UserController