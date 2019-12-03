'use strict';


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
 * Cadastrar Banda Larga
 * Cadastrar Banda Larga.
 *
 * body Banda 
 * returns RetornoBanda
 **/
exports.cadastrarBanda = function(body) {
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

