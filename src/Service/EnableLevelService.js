// Repository
const EnableLevelRepository     = require('../Repository/EnableLevelRepository');
const CompletedLevelRepository  = require('../Repository/CompletedLevelRepository');

//Validator
const { 
    findEnableLevel,
    insertEnableLevel
}                               = require('../Validators/EnableLevelValidator');

class EnableLevelService {
    async getEnableLevel(params) {
        try {
            // Data input validation
            const { error, value } = findEnableLevel.validate(params, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Got enable level
            const result = await EnableLevelRepository.findAll({
                idUser: value.id
            })
            if(!result) {
                throw new Error('enable_level_not_found');
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async insertEnableLevel(body) {

        try {
            // Data input validation
            const { error, value } = insertEnableLevel.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            const levelEnabled = value.level + 1
            let finishLevels = []

            // Check level
            const checkIfExists = await EnableLevelRepository.findAll({
                idUser: value.idUser,
                level: levelEnabled
            })

            const checkIfFinishLevel = await CompletedLevelRepository.findAll({
                idUser: value.idUser,
                level: value.level
            })

            // Create comleted level
            if(checkIfExists.length == 0 && value.points >= 6 && checkIfFinishLevel.length == 0) {
                await EnableLevelRepository.createEnableLevel({
                    idUser: value.idUser,
                    level: levelEnabled,
                    enable: true
                })

                finishLevels = await CompletedLevelRepository.createCompletedLevels({
                    idUser: value.idUser,
                    level: value.level,
                    completed: true
                })
            }

            return finishLevels;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new EnableLevelService();