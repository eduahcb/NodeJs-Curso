const app = require('./config/server')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io', io);

process.env.PORT = 8080;

http.listen(process.env.PORT, () => {
    console.log(`servidor rodando ${process.env.PORT}`);
});