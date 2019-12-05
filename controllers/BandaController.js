const express = require('express');
//var BandaModel = require("../model/Banda.js");

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use('/bandas', router);

    // ?velocidade=:velocidade&tecnologia=:tecnologia
    router.get('/banda', find);
    router.post('/banda', cadastrarBanda);

    //Registering API methods in router
    
    //BandaModel.updateOptions({new: true, runValidators: true});
    //BandaModel.register(router, '/banda');
}

const find = (req, res, next) => {
    const velocidade = req.params.velocidade;
    const tecnologia = req.params.tecnologia;
    
    console.log("velocidade: " +  velocidade);
    console.log("tecnologia: " +  tecnologia);

    // alterar para chamar o service
    BandaModel.find({'tecnologia' : tecnologia}, (err, item) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(item);
        }
    });
};

const cadastrarBanda = function (req, res, next) {

    console.log(req.body);

    //var body = req.params['body'].value;
    //console.log(body);
    /*BandaLarga.cadastrarBanda(body).then(function (response) {
        utils.writeJson(res, response);
    })
    .catch(function (response) {
        utils.writeJson(res, response);
    });*/
};