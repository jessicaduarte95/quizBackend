const bcrypt                = require('bcrypt');

// Models
const Usuarios              = require('../Model/usuarios');

// Repository
const UserRepository        = require('../Repository/UserRepository');

//Validator
const { create, login }     = require('../Validators/UserValidator');


class UserService {
    async getUser(data) {
        try {
            // Email input validation
            if(!data?.email) {
                throw new Error('email_required');
            }
        
            // Find email
            const result = await UserRepository.findOne({ email: data.email.trim()});
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
            const encodedPassword = await bcrypt.hash(value.password.trim(), 15);

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

    async login(body) {
        try {
            // Data input validation
            const { error, value } = login.validate(body, { abortEarly: false });
            if (error) {
                throw new Error(error);
            }

            // Find email
            const result = await UserRepository.findOne({ email: body.email.trim()});
            if(!result) {
                throw new Error('email_not_found');
            }

            //Verify password
            const password = await bcrypt.compare(value.password, result.password);

            if(!password) {
                throw new Error('password_invalid');
            }

            return result;
        } catch (error) {
            throw new Error(error);
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