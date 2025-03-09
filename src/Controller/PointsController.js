const PointsService = require('../Service/PointsService');

class PointsController {
    async setPointsLevel(req, res) {
        try {
            const params = req.params;
            const body = req.body;
            const result = await PointsService.setPointsLevel(params, body);
            res.status(201).json({ message: "set_points_level", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_set_points_level",
                error: error.toString()
            });
        }
    }
}

module.exports = PointsController;