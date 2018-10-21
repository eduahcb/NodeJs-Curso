module.exports =  app => {

    const produto = require('../../controllers/ProdutoController');

    app.route('/produtos')
        .get( (req, res) => produto.gellAll(req, res))
        .post( (req, res) => produto.post(req, res));

    app.route('/produtos/form')
        .get( (req, res) =>  res.render('produto/form', {erros: [], produto: {} }));

}