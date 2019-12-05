const express = require('express');
var BandaModel = require("../model/Banda.js");

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use('/bandas', router);

    router.get('/banda?tecnologia=:tecnologia&velocidade=:velocidade', bandaRepository.find);

    //Registering API methods in router
    
    BandaModel.updateOptions({new: true, runValidators: true});
    const itemRepository = find;
    itemRepository.register(router, '/banda');
}

const find = (req, res, next) => {
    const velocidade = req.params.velocidade;
    const tecnologia = req.params.tecnologia;
    // Find the objet by name
    BandaModel.find({'tecnologia' : tecnologia}, (err, item) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(item);
        }
    });
};