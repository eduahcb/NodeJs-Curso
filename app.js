const app = require('./config/server')();

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
})