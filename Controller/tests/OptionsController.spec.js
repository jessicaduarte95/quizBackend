const OptionsController = require('../OptionsController');
const optionsController = new OptionsController();

describe("Options Controller", () => {
    it("Should return options of question successfully", async () => {
        const request = {
            body: {
                perguntaAtual: 0
            }
        }

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await optionsController.getOptionsQuestions(request, response)

        expect(response.status).toHaveBeenCalledWith(200)
        
    })
})