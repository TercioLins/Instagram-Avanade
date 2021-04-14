const {Usuario} = require('../models')
module.exports = async (request, response, next) => {
    let{nome, email, senha} = request.body;
    let userEmail = await Usuario.findAll({where:{email}}) ;
    let userNome = await Usuario.findAll({where:{nome}}) ;
    
    if(userEmail.length){
        response.status(400).json({erro:"Email já cadastrado"})        
    } else if(!email){
        response.status(400).json({ erro: "Favor informar o email"})
    } else if(!nome) {
        response.status(400).json({ erro: "Favor informar o nome"})
    } else  if(userNome.length){
        response.status(400).json({erro:"Nome já cadastrado"})
    } else if(!senha){
        response.status(400).json({erro:"Favor informar a senha"})
    } else if(senha.length < 6 || senha.length > 12){
        response.status(400).json({erro: "A senha deve conter entre 6 e 12 caracteres"})
    } else {
        next();
    } 
        
}