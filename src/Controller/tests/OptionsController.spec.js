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

    it("Should create options of question successfully", async () => {
        const request = {
            body: {
                nivelOptions: '1',
                questionOptions: '100',
                options: [
                    { option1: 'Via-Láctea', correct1: 1 },
                    { option2: 'Andrômeda', correct2: 0 },
                    { option3: 'Centaurus', correct3: 0 },
                    { option4: 'Triângulo', correct4: 0 }
                ]
            }
        }

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await optionsController.insertOptions(request, response)

        expect(response.status).toHaveBeenCalledWith(201)

    })
})