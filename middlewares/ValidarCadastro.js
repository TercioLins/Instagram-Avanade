const {Usuario} = require('../models')
module.exports = async (request, response, next) => {
    let{nome, email, senha} = request.body;
    let user = await Usuario.findAll({where:{email}}) ;
        
    if(user.length){
        return response.status(400).json({erro:"Email já cadastrado"})        
    } else if(!email){
        return response.status(400).json({ erro: "Favor informar o email"})
    } else if(!nome) {
        return response.status(400).json({ erro: "Favor informar o nome"})
    } else  if(!senha){
        return response.status(400).json({erro:"Favor informar a senha"})
    } else if(senha.length < 6 || senha.length > 12){
        return response.status(400).json({erro: "A senha deve conter entre 6 e 12 caracteres"})
    } else {
        next();
    } 
        
}