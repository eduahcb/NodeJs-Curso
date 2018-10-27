const app = require('./config/server')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});