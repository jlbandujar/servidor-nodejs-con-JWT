require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.static('public'));
const port=process.env.PORT;
app.get('/', function (req, res) {
  res.send('Hola IES JUAN BOSCO')
})
app.get('/saludo', function (req, res) {
    res.send('<h1>Hola 2DAW</h1>')
  })
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
  })
app.listen(port);
console.log('Escuchando el puerto 3000');