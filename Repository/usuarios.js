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
        await Usuarios.create({
        nome: data.nome,
        email: data.email,
        senha: data.senha
    })
        return false;
    }
}

const login = async(data) => {

     const usuarioExists = await Usuarios.count({
        where: {
            email: data.loginEmail,
            senha: data.loginSenha
        }
    }).then((response) => {
        if(response != 0){
            return true;
        }else{
            return false;
        }
    })

    usuarioExists;
}

module.exports= {
    cadastrarUsuario,
    login
}