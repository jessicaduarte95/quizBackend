// Repository
const CompletedLevelRepository          = require('../Repository/CompletedLevelRepository');

//Validator
const { findCompletedLevel }            = require('../Validators/CompletedLevelValidator');

class CompletedLevelService {
    async getCompletedLevel(params, query) {
        try {
            const data = {
                id: params.id,
                level: query.level
            }

            // Data input validation
            const { error, value } = findCompletedLevel.validate(data, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Got enable level
            const result = await CompletedLevelRepository.findAll({
                id: value.id,
                level: value.level
            })

            if(!result) {
                throw new Error('completed_level_not_found');
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new CompletedLevelService();