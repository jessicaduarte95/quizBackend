const QuestionController = require('../QuestionController');
const questionController = new QuestionController();

describe("Question Controller", () => {
    it("Should return questions successfully", async () => {
        const request = {
            body: {
                nivel: 1
            }
        }

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await questionController.getQuestionsLevel(request, response)

        expect(response.status).toHaveBeenCalledWith(200);
        
    })

    // it("Should create question successfully", async () => {
    //     const request = {
    //         body: {
    //             idquestao: 14,
    //             nivel: 2,
    //             pergunta: "Teste"
    //         }
    //     }

    //     const response = {
    //         status: jest.fn().mockReturnThis(),
    //         json: jest.fn()
    //     }

    //     await questionController.insertQuestion(request, response)

    //     expect(response.status).toHaveBeenCalledWith(200);
        
    // })
})