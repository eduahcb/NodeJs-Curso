const app = require('../config/server')();
const request = require('supertest');

describe('#ProdutoController', () => {

    it('#Lista produtos com json', (done) => {
        request(app)
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('#cadastro droduto sem dados html', (done) => {
        request(app)
            .post('/produtos')
            .set('Accept', 'application/json')
            .send( { titulo : "", descricao : "", preco: ""})
            .expect(400, done);
    });

    it('#cadastro produto dados json', (done) => {
        request(app)
            .post('/produtos')
            .set('Accept', 'application/json')
            .send( { titulo : "teste", descricao : "kkkk", preco: 99.99})
            .expect(200, done);
    });

    it('#cadastro droduto com  html', (done) => {
        request(app)
            .post('/produtos')
            .send( { titulo : "Eduardo", descricao : "teste eduardo", preco: 99.90})
            .expect(302, done);
    });
});
