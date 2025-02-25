const PointsLevel = require('../Model/pontosnivel');

class PointsService {
    async setPointsLevel(data) {
        const checkPoints = await PointsLevel.findAll({
            where: {
                id: data.id,
                nivel: data.nivel
            }
        })

        if (checkPoints.length == 0) {
            await PointsLevel.create({
                id: data.id,
                nivel: data.nivel,
                pontos: data.pontos
            })
        } else {
            await PointsLevel.update({pontos: data.pontos}, {
                where: {
                    id: data.id,
                    nivel: data.nivel
                }
            })
        }
    }
}

module.exports = PointsService;