const EnableLevelService = require('../Service/EnableLevelService');
const enableLevelService = new EnableLevelService();

class EnableLevelController {

    async insertEnableLevel(req, res) {
        const data = req.body;

        try {
            await enableLevelService.insertEnableLevel(data);
            res.status(201).json();
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Erro ao inserir o nível habilitado!' })
        }
    }
}

module.exports = EnableLevelController;