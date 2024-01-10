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
            } else if (checkIfFinishLevel.length !== 0) {
                nivelConcluido = await NivelConcluido.update({
                    concluido: 1
                }, {
                    where: {
                        id: data.id,
                        nivel: data.nivel,
                    }
                })
            }

        } else {

            if (checkIfFinishLevel.length == 0) {
                nivelConcluido = await NivelConcluido.create({
                    id: data.id,
                    nivel: data.nivel,
                    concluido: 0
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
}

module.exports = EnableLevelService;