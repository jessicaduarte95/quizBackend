// Repository
const PointsRepository     = require('../Repository/PointsRepository');

//Validator
const { setPoints }        = require('../Validators/PointsValidator');

class PointsService {
    async setPointsLevel(params, body) {
        try {
            // Data input validation
			const data = {
                idUser: params.id,
				level: body.level,
				points: body.points
			};

            const { error, value } = setPoints.validate(data, { abortEarly: false });
            if (error) {
                throw new Error(error);
            };

            // Check points
            const points = await PointsRepository.findAll({
                idUser: value.idUser,
                level: value.level
            });
         
            // Create or update points
            if(points.length == 0) {
                await PointsRepository.createPoint(data)
            } else {
                await PointsRepository.updatePoints(
                    { points: value.points },
                    {
                        idUser: value.idUser,
                        level: value.level
                    }
                )
            }
            
            return;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new PointsService();