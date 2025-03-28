const EnableLevelService = require('../Service/EnableLevelService');

class EnableLevelController {

    async getEnableLevel(req, res) {
        try {
            const params = req.params
            const result = await EnableLevelService.getEnableLevel(params);
            res.status(200).json({ message: "got_enable_levels", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_got_enable_levels",
                error: error.toString()
            });
        }
    }

    async insertEnableLevel(req, res) {
        try {
            const data = req.body;
            const result = await EnableLevelService.insertEnableLevel(data);
            res.status(201).json({ message: "created_enable_level", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_created_enable_level",
                error: error.toString()
            });
        }
    }
}

module.exports = EnableLevelController;