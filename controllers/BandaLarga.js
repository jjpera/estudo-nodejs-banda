'use strict';

var utils = require('../utils/writer.js');
var BandaLarga = require('../service/BandaLargaService');

module.exports.cadastrarBanda = function cadastrarBanda (req, res, next) {
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
    console.log(req.params)
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
    console.log("-----------------------------------------");
  var body = req.swagger.params['body'].value;
  BandaLarga.cadastrarBanda(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.alterarBanda = function alterarBanda (req, res, next) {
  var body = req.swagger.params['body'].value;
  var codigo = req.swagger.params['codigo'].value;
  BandaLarga.alterarBanda(body,codigo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarBanda = function buscarBanda (req, res, next) {
  var pagina = req.swagger.params['pagina'].value;
  var qtdePagina = req.swagger.params['qtdePagina'].value;
  var velocidade = req.swagger.params['velocidade'].value;
  var tecnologia = req.swagger.params['tecnologia'].value;
  BandaLarga.buscarBanda(pagina,qtdePagina,velocidade,tecnologia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.excluirBanda = function excluirBanda (req, res, next) {
  var codigo = req.swagger.params['codigo'].value;
  BandaLarga.excluirBanda(codigo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
