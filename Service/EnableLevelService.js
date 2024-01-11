const HabilitarNivel = require('../Model/habilitarnivel');
const NivelConcluido = require('../Model/nivelconcluido');

class EnableLevelService {
    async insertEnableLevel(data) {

        const levelEnabled = data.nivel + 1
        const checkIfExists = await HabilitarNivel.findAll({
            where: {
                id: data.id,
                nivel: levelEnabled
            }
        })
        const checkIfFinishLevel = await NivelConcluido.findAll({
            where: {
                id: data.id,
                nivel: data.nivel
            }
        })

        let nivelConcluido = [];

        if (checkIfExists.length == 0 && data.pontos >= 6) {
            await HabilitarNivel.create({
                id: data.id,
                nivel: levelEnabled,
                habilitar: 'Sim'
            })

            if (checkIfFinishLevel.length == 0) {
                nivelConcluido = await NivelConcluido.create({
                    id: data.id,
                    nivel: data.nivel,
                    concluido: 1
                })
            }

        }

        return nivelConcluido;
    }

    async getEnableLevel(id) {

        const getEnableUserLevel = HabilitarNivel.findAll({
            where: {
                id
            }
        })

        return getEnableUserLevel;
    }

    async getFinishLevel(data) {

        const checkFinishLevel = NivelConcluido.findAll({
            where: {
                id: data.id,
                nivel: data.nivel
            }
        })

        return checkFinishLevel;
    }
}

module.exports = EnableLevelService;