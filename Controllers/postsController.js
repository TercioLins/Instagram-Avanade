const {Post,sequelize} = require('../models')

/*     GET users listing.   */
const postsController = {
    index: async (request, response) => {
        let posts =  await Post.findAll();
        
        return response.json(posts);
    }, 
    create: async (request, response) => {
        let {texto, img, usuarios_id, n_likes} = request.body;

        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });

        return response.json(novoPost);
    },
    update: async (request, response) => {
        let { id } = request.params;
        let {texto, img, usuarios_id, n_likes} = request.body;

        let postAtualizado = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: { id }
        });

        return response.send(postAtualizado);
    },
    delete: async (req, res) => {
        const post = req.params;
        await Post.destroy({where: {
            id: post.id
        }})
        return res.send('Post deletado com sucesso!')
    },
    show: async (req,res) => {
        let { id } = req.params;
        let posts = await Post.findAll({
            where: { usuarios_id: id}
        });
        return res.json(posts);
    }

}

module.exports = postsController;

     