const produto = require('../models/ProdutoModel');

exports.home = async(req, res) => {

    try {

        const result = await produto.getAll();

        res.render('home/index', { livros: result});


    } catch (error) {
        console.log('deu erro');

    }
}