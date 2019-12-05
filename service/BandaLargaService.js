'use strict';

var BandaRepository = require("../repository/BandaRepository.js");

/**
 * Cadastrar Banda Larga
 * Cadastrar Banda Larga.
 *
 * body Banda 
 * returns RetornoBanda
 **/
exports.cadastrarBanda = function(body) {
    // tratar erro
    console.log("cadastrarBanda" + body);

    BandaRepository.Insert(body);

    console.log("cadastrarBanda success" + body);

    // success
    return new RetornoBanda({
        codigo: 0,
        descricao: "",
        registros: 1,
        pagina: 0,
        qtdePagina: 1,
        listaBandas:[{body}]
    });
}

/**
 * Alterar Banda Larga
 * Alterar Banda Larga.
 *
 * body Banda 
 * codigo Long 
 * returns RetornoBanda
 **/
exports.alterarBanda = function(body,codigo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar Banda Larga
 * Buscar Banda Larga.
 *
 * pagina Integer 
 * qtdePagina Integer 
 * velocidade String  (optional)
 * tecnologia Tecnologia  (optional)
 * returns RetornoBanda
 **/
exports.buscarBanda = function(pagina,qtdePagina,velocidade,tecnologia) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



/**
 * Excluir Banda Larga
 * Excluir Banda Larga.
 *
 * codigo Long 
 * returns RetornoBanda
 **/
exports.excluirBanda = function(codigo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
