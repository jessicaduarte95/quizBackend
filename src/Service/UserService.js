const crypto         = require('crypto');

// Models
const Usuarios       = require('../Model/usuarios');

// Repository
const UserRepository = require('../Repository/UserRepository');

//Validator
const { create }     = require('../Validators/UserValidator');


class UserService {
    async getUser(data) {
        try {
            // Email input validation
            if(!data?.email) {
                throw new Error('email_required');
            }
        
            // Find email
            const result = await UserRepository.findOne({ email: data.email});
            if(!result) {
                throw new Error('email_not_found');
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async createUser(body) {
        try {
            // Data input validation
            const { error, value } = create.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Check if the user exists
            const countUser = await UserRepository.countUser(value);
            if(countUser > 0) {
                throw new Error('already_registered_user');
            }

            // Encoded password
            const hash = crypto.createHash('sha256');
            hash.update(value.password.trim());
            const encodedPassword = hash.digest('hex');

            // If no user exists, it will be created
            const data = {
                name: value.name.trim(),
                email: value.email.trim(),
                password: encodedPassword
            }

            await UserRepository.createUser(data);

            return;
        } catch (error) {
            throw new Error(error);
        }
    }

    async login(data) {

        const loginEmail = data.loginEmail.trim();
        const loginSenha = data.loginSenha.trim();

        const hash = crypto.createHash('sha256');
        hash.update(loginSenha);
        const encodedPassword = hash.digest('hex');


        const usuarioExists = await Usuarios.findAll({
            where: {
                email: loginEmail,
                senha: encodedPassword
            }
        }).then((response) => {
            if (response != 0) {
                const dataUsuario = response[0].dataValues;
                return dataUsuario;
            } else {
                return false;
            }
        })

        if (usuarioExists) {
            const retorno = true;
            return [retorno, usuarioExists]
        } else {
            return false
        }
    }

    async changePassword(data) {

        Usuarios.update({senha: data.senha}, {
            where: {
              id: data.idUser
            }
        })
        return;
    }
}

module.exports = new UserService();