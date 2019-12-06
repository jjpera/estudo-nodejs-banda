const port = 8083;
//BODY parse of requistion
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

// configurações app
server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: true }));

// servico ativo
server.listen(process.env.PORT || port, function () {
  console.log('Listening on');
});

// adiciona conexão com o banco
require('./repository/Connection')

// inicia controller
require('./controllers/BandaController')(server)