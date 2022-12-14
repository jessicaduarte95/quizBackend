const Usuarios = require('../Model/usuarios');

const cadastrarUsuario = async(data) => {

    const emailExist = await Usuarios.count({
        where: {
            email: data.email
        }
    }).then(dataEmail => {
        if(dataEmail != 0){
            return true;
        }else{
            return false;
        }
    })

    if(emailExist) {
        return true;
    }else{
        const nome = data.nome.trim();
        const email = data.email.trim();
        const senha = data.senha.trim();

        await Usuarios.create({
        nome: nome,
        email: email,
        senha: senha
    })
        return false;
    }
}

const login = async(data) => {

    const loginEmail = data.loginEmail.trim();
    const loginSenha = data.loginSenha.trim();

     const usuarioExists = await Usuarios.findAll({
        where: {
            email: loginEmail,
            senha: loginSenha
        }
    }).then((response) => {
        if(response != 0){
            const dataUsuario = response[0].dataValues;
            return dataUsuario;
        }else{
            return false;
        }
    })

    if(usuarioExists){
        const retorno = true;
        return [retorno, usuarioExists]
    }else{
        return false
    }
}

module.exports= {
    cadastrarUsuario,
    login
}