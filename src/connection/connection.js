
let config;

if (process.env.NODE_ENV == 'production') {
    
    config = {
        host: 'localhost',
        user: 'root',
        password: 'edu123',
        database: 'casa_do_codigo'
    }
}
else {
    
    config = {
        host: 'localhost',
        user: 'root',
        password: 'edu123',
        database: 'casa_do_codigo_teste'
    }
}

module.exports = () => global.config = config;