const EnableLevelService = require('../Service/EnableLevelService');
const enableLevelService = new EnableLevelService();

class EnableLevelController {

    async insertEnableLevel(req, res) {
        const data = req.body;

        try {
            const enableLevel = await enableLevelService.insertEnableLevel(data);
            res.status(201).json({ enableLevel });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao inserir o nível habilitado!' })
        }
    }

    async getEnableLevel(req, res) {
        const id = req.params.id

        try {
            const getEnableUserLevel = await enableLevelService.getEnableLevel(id);
            res.status(200).json(getEnableUserLevel);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao carregar níveis habilitados!' })
        }
    }

    async getFinishLevel(req, res) {
        const data = req.params

        try {
            const getFinishLevel = await enableLevelService.getFinishLevel(data);
            res.status(200).json(getFinishLevel);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao carregar níveis concluídos!' })
        }
    }
}

module.exports = EnableLevelController;