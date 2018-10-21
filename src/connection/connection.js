
let config;

if (process.env.DATABASE == 'test') {

    config = {
        host: 'localhost',
        user: 'root',
        password: 'edu123',
        database: 'casa_do_codigo_teste'
    }
}
else {
    config = {
        host: 'localhost',
        user: 'root',
        password: 'edu123',
        database: 'casa_do_codigo'
    }
}

module.exports = () => global.config = config;