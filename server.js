const express = require('express')
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const passport = require('passport')

const hostname = config.serverIp
const port = config.serverPort

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
routes(app)
/*app.listen(port,() => {
    console.log(`App listen on port ${port}`);
})*/
app.listen(port, hostname,() => {
    console.log(`App listen on port ${port}`);
})

/*const http = require('http')

const hostname = '185.251.89.161'
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/
