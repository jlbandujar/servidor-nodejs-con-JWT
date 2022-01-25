const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.rutas();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    rutas(){
    this.app.get('/', function (req, res) {
            res.send('Hola IES JUAN BOSCO')
          })
    this.app.get('/api', function (req, res) {
            res.status(403).json({
                ok:true,
                msg: 'get API'
            })
          })
    this.app.get('/suma', function (req, res) {
            const num1= Number(req.query.num1);
            const num2= Number(req.query.num2);
            res.send(`La suma de ${num1} y ${num2} es ${(num1)+(num2)}`)
          })

    this.app.post('/api', function (req, res) {
            const body = req.body;
            res.json({
                ok:true,
                msg: 'post API',
                body
            })
          })
    this.app.put('/api/', function (req, res) {
        const id = req.query.id;
            res.status(403).json({
                ok:true,
                msg: 'put API',
                id
            })
          })
    this.app.delete('/api', function (req, res) {
            res.status(403).json({
                ok:true,
                msg: 'delete API'
            })
          })
    this.app.get('/saludo', function (req, res) {
              res.send('<h1>Hola 2DAW</h1>')
            })
    this.app.get('*', function (req, res) {
              res.sendFile(__dirname + '/404.html')
            })
    }

    listen(){
        this.app.listen(port, function() { 
            console.log('Escuchando el puerto',port)});
    }
}
module.exports = Server;