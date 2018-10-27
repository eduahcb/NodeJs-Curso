const produto = require('../models/ProdutoModel');

exports.promocao = async(req, res) => {

    try {

        const result = await produto.getAll();

        res.render('promocoes/promocao', {livros: result});
        
    } catch (error) {
        console.log(error);
    }
}

exports.post = async(req, res, app) => {

    try {
        
        const dado = req.body;

        const livro = await produto.getById(dado.id);

        const conteudo = {
            mensagem : dado.mensagem,
            livro : livro
        }
        app.get('io').emit('nova-promocao', conteudo);
        res.redirect('/promocoes');

    } catch (error) {
        console.log(error);
    }
}