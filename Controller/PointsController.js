const PointsService = require('../Service/PointsService');
const pointsService = new PointsService();

class PointsController {
    async setPointsLevel(req, res) {
        const data = req.body;

        try {
            await pointsService.setPointsLevel(data);
            res.status(201).json();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao cadastrar pontos!' });
        }
    }
}

module.exports = PointsController;