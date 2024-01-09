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

        if (checkIfExists.length == 0 && data.pontos >= 6) {

            const insert = await HabilitarNivel.create({
                id: data.id,
                nivel: levelEnabled,
                habilitar: 'Sim'
            })

            if(checkIfFinishLevel.length == 0) {
                await NivelConcluido.create({
                    id: data.id,
                    nivel: data.nivel,
                    concluido: 1
                })
            }

            return insert;

        } else {

            if(checkIfFinishLevel.length == 0) {
                 await NivelConcluido.create({
                    id: data.id,
                    nivel: data.nivel,
                    concluido: 0
                })
            }
            return checkIfFinishLevel;
        }
    }

    async getEnableLevel(id) {

        const getEnableUserLevel = HabilitarNivel.findAll({
            where: {
                id
            }
        })

        return getEnableUserLevel;
    }
}

module.exports = EnableLevelService;