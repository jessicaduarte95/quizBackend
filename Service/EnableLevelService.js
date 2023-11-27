const HabilitarNivel = require('../Model/habilitarnivel');

class EnableLevelService {
    async insertEnableLevel(data) {

        const levelEnabled = data.nivel + 1
        const checkIfExists = await HabilitarNivel.findAll({
            where: {
                id: data.id,
                nivel: levelEnabled
            }
        })

        if (checkIfExists.length == 0 && data.pontos >= 6) {

            const insert = await HabilitarNivel.create({
                id: data.id,
                nivel: levelEnabled,
                habilitar: 'Sim'
            })

            return insert;
        } else {
            return;
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