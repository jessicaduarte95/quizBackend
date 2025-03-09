// Repository
const EnableLevelRepository     = require('../Repository/EnableLevelRepository');

//Validator
const { 
    findEnableLevel}            = require('../Validators/EnableLevelValidator');

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

    async insertEnableLevel(data) {

        try {
            return;
        } catch (error) {
            throw new Error(error);
        }

        // const levelEnabled = data.nivel + 1
        // const checkIfExists = await HabilitarNivel.findAll({
        //     where: {
        //         id: data.id,
        //         nivel: levelEnabled
        //     }
        // })
        // const checkIfFinishLevel = await NivelConcluido.findAll({
        //     where: {
        //         id: data.id,
        //         nivel: data.nivel
        //     }
        // })

        // let nivelConcluido = [];

        // if (checkIfExists.length == 0 && data.pontos >= 6) {
        //     await HabilitarNivel.create({
        //         id: data.id,
        //         nivel: levelEnabled,
        //         habilitar: 'Sim'
        //     })

        //     if (checkIfFinishLevel.length == 0) {
        //         nivelConcluido = await NivelConcluido.create({
        //             id: data.id,
        //             nivel: data.nivel,
        //             concluido: 1
        //         })
        //     }

        // }

        // return nivelConcluido;
    }
}

module.exports = new EnableLevelService();