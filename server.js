const express = require('express');
const path = require('path');
const port = (process.env.PORT || '3000');
const pug = require('pug');
const home = require('./routes/home');

const server = express();

server.set('port', port);
server.set('views', __dirname + '/views');
server.set('view engine', 'pug');

server.use(express.static(__dirname + '/public/'));

server.all('/*', home);
server.use('/edit/:id', home);

server.listen(port, function () {
  console.log('Example app listening on port 3000!');
});