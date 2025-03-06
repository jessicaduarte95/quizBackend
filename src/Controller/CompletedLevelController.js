const CompletedLevelService = require('../Service/CompletedLevelService');

class CompletedLevelController {

    async getCompletedLevel(req, res) {
        try {
            const params = req.params
            const query = req.query
            const result = await CompletedLevelService.getCompletedLevel(params, query);
            res.status(200).json({ message: "got_completed_levels", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_got_completed_levels",
                error: error.toString()
            });
        }
    }
}

module.exports = CompletedLevelController;