'use strict'

var BandaModel = require("../model/Banda.js");

exports.Insert = function(banda) {
    console.log("Insert, gerando bandaModel: " + banda.velocidade + " " + banda.tecnologia);

    let bandaModel = new BandaModel({
        velocidade: banda.velocidade,
        tecnologia: banda.tecnologia
    });

    console.log("Insert, salvando");

    return bandaModel.save();
}

exports.Update = function(id, banda) {
    return BandaModel.findOneAndUpdate({
        _id: id // find pelo id
    }, {
        velocidade: banda.velocidade, // atualiza campo velocidade
        tecnologia: banda.tecnologia  // atualiza campo tecnologia
    }, {
        runValidators: true // validate before update
    });
}

exports.Find = function(banda, pagina, qtdePagina) {

    return BandaModel.find(banda).sort({
        velocidade: 1,
        tecnologia: 1
    }).skip(pagina * qtdePagina).limit(qtdePagina).exec();
}

exports.Delete = function(id) {
    return BandaModel.findOneAndRemove({
        _id: id
    });
}

exports.Count = function(banda) {
    return BandaModel.countDocuments(banda);
}