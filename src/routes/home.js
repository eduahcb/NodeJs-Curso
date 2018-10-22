module.exports = app => {

    const home = require('../controllers/HomeController');
    app.route('/')
        .get( (req, res) => home.home(req, res));
}