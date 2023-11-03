// 1º PRECISO importar o arquivo de modulo
const User = require('../models/User')

module.exports = class AuthController{
    static login(require, response){
        //render -> diretório do projeto - nomeArquivo
        // redirect -> Mandar para uma ROTA - sempre começa com /
        return response.render('auth/login')
    }
    static register(require, response){
        response.render('auth/register')
        return
    }
    static async registerPost(){}
}