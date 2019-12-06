const express = require('express');
var bandaService = require('../service/BandaService');

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use('/bandas', router);

    router.get('/banda', find);
    router.post('/banda', insert);
    router.put('/banda/:codigo', edit);
    router.delete('/banda/:codigo', remove);

    //BandaModel.methods(['get', 'post', 'put', 'delete']);
    //BandaModel.updateOptions({new: true, runValidators: true});
    //BandaModel.register(router, '/banda');
}

const insert = function (req, res, next) {
    console.log("Controller.Insert: " + JSON.stringify(req.body));
    bandaService.insert(req.body, res);
};

const edit = function (req, res, next) {
    const id = req.params.codigo;
    console.log("Controller.Update: " + JSON.stringify(req.body));
    bandaService.update(id, req.body, res);
};

const find = (req, res, next) => {
    var banda = {};
    if (req.query.velocidade) {
        banda.velocidade = req.query.velocidade;
    }
    if (req.query.tecnologia) {
        banda.tecnologia = req.query.tecnologia;
    }

    const pagina = Number(req.query.pagina);
    const qtdePagina = Number(req.query.qtdePagina);

    console.log("Controller.Find: banda:" + banda
        + " pagina:" + pagina + " qtdePagina:" + qtdePagina);
    bandaService.find(banda, pagina, qtdePagina, res);
};

const remove = function (req, res, next) {
    const id = req.params.codigo;
    console.log("Controller.Delete: " + id);
    bandaService.delete(id, res);
};