module.exports = app => {

    const promocao = require('../controllers/PromocaoController');
    app.route('/promocoes')
        .get( (req, res) => promocao.promocao(req, res))
        .post( (req, res) => promocao.post(req, res, app));
}