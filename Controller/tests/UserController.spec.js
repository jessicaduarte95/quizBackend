
const UserController = require('../UserController')
const userController = new UserController();

describe("User Controller", () => {
    it("Should create user successfully", async () => {
        const req = {
            body: {
                nome: "Teste",
                email: "teste@teste.com",
                senha: "123456"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await userController.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    })

    it("Should login successfully", async () => {
        const req = {
            body: {
                email: "jessicaduarte.95@gmail.com",
                senha: "123456"
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await userController.login(req, res);
        // expect(res.status).toHaveBeenCalledWith(200);
    })


})