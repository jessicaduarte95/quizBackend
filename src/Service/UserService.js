const Usuarios = require('../Model/usuarios');
const crypto = require('crypto');

class UserService {
    async createUser(data) {

        const emailExist = await Usuarios.count({
            where: {
                email: data.email
            }
        }).then(dataEmail => {
            if (dataEmail != 0) {
                return true;
            } else {
                return false;
            }
        })

        if (emailExist) {
            return true;
        } else {
            const nome = data.nome.trim();
            const email = data.email.trim();
            const senha = data.senha.trim();

            const hash = crypto.createHash('sha256');
            hash.update(senha);
            const encodedPassword = hash.digest('hex');

            await Usuarios.create({
                nome: nome,
                email: email,
                senha: encodedPassword
            })
            return false;
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

    async checkUser(data) {

        const checkUser = await Usuarios.findOne({
            where: {
                email: data.email
            }
        }).then((response) => {
            if (response != null) {
                return response;
            } else {
                return false;
            }
        })

        return checkUser;
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

module.exports = UserService