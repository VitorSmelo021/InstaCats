// 1° PRECISO importar o arquivo de módulo
const User = require('../models/User')

module.exports = class AuthController{
    static login(request, response){
        // render -> Diretório do projeto
        // redirect -> Mandar para uma ROTA - 
        return response.render('auth/login')
    }
    static register(require, response){       
        return response.render('auth/register')
    }
    static async registerPost(request, response){
        const { name, email, password } = request.body;

        try{
            const user = await User.create({name, email, password});
            if(user){
                return response.redirect("/register");
            }
        }catch(error){
            console.error(error);
        }
    }
}

