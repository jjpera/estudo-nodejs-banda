const bandaRepository = require('../repository/BandaRepository');
const RetornoBanda = require('../model/RetornoBanda');
const HistoricoService = require('./HistoricoService');

module.exports.insert = function(banda, res) {
    var retornoBanda = RetornoBanda.instance();

    bandaRepository.Insert(banda).then(docs => {
        HistoricoService.call("post", docs);
        retornoBanda.listaBanda = [docs];
        res.json(retornoBanda);
    }).catch(err => {
        retornoBanda.codigo = 500;
        retornoBanda.descricao = JSON.stringify(err.errors);
        res.json(retornoBanda);
    });
}

module.exports.update = function(id, banda, res) {
    var retornoBanda = RetornoBanda.instance();

    bandaRepository.Update(id, banda).then(docs => {
        HistoricoService.call("put", docs);
        retornoBanda.listaBanda = [docs];
        res.json(retornoBanda);
    }).catch(err => {
        retornoBanda.codigo = 500;
        retornoBanda.descricao = JSON.stringify(err.errors);
        res.json(retornoBanda);
    });
}

module.exports.find = function(banda, pagina, qtdePagina, res) {
    var retornoBanda = RetornoBanda.instance(pagina, qtdePagina);

    bandaRepository.Find(banda, pagina, qtdePagina).then(docs => {
        HistoricoService.call("get", banda);
        retornoBanda.listaBanda = docs;
        bandaRepository.Count(banda).then(docs => {
            retornoBanda.registros = docs;
            res.json(retornoBanda);
        })
    }).catch(err => {
        retornoBanda.codigo = 500;
        retornoBanda.descricao = err;
        res.json(retornoBanda);
    });
}

module.exports.delete = function(id, res) {
    var retornoBanda = RetornoBanda.instance();

    bandaRepository.Delete(id).then(docs => {
        HistoricoService.call("delete", docs);
        retornoBanda.listaBanda = docs;
        res.json(retornoBanda);
    }).catch(err => {
        retornoBanda.codigo = 500;
        retornoBanda.descricao = err.errmsg;
        res.json(retornoBanda);
    })
}
