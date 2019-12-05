var BandaModel = require("../model/Banda.js");
const bandaRepository = require('../repository/BandaRepository');

//Create REST API, adds CRUD to Mongog's schema
//BandaModel.methods(['get', 'post', 'put', 'delete']);

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

module.exports = { find }