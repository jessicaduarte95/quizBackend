const OptionsService = require('../Service/OptionsService')
const optionsService = new OptionsService();

class OptionsController {

    async getOptionsQuestions(req, res) {
        const data = req.body;

        try {
            const options = await optionsService.getOptionsQuestions(data);
            res.status(201).json(options);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar opções de determinada pergunta!' });
        }
    }
}


module.exports = OptionsController;