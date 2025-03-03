const OptionsService = require('../Service/OptionsService')
const optionsService = new OptionsService();

class OptionsController {

    async getOptionsQuestions(req, res) {
        try {
            const params = req.params;
            const query = req.query;
            const result = await optionsService.getOptionsQuestions(params, query);
            res.status(200).json({ message: "got_options_question", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_got_options_question",
                error: error.toString()
            });
        }
    }

    async insertOptions(req, res) {
        try {
            const body = req.body;
            const result = await optionsService.insertOptions(body);
            res.status(201).json({ message: "created_options_question", result });
        } catch (error) {
            return res.status(500).json({ 
                message: error.message || "error_created_options",
                error: error.toString()
            });
        }
    }
}


module.exports = OptionsController;