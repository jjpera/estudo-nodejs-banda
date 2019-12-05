'use strict'

var BandaModel = require("../model/Banda.js");


//////////////////////////////////////////////////////
exports.Insert = function(banda) {

    console.log("Insert, gerando bandaModel");

    let bandaModel = new BandaModel({
        velocidade: banda.velocidade,
        tecnologia: banda.tecnologia
    });

    console.log("Insert, salvando");

    bandaModel.save().then(doc => {
        console.log(doc)
    }).catch(err => {
        console.error(err)
    })
}

exports.Update = function(banda) {
    let bandaModel = new BandaModel({
        velocidade: banda.velocidade,
        tecnologia: banda.tecnologia
    });

    bandaModel.findOneAndUpdate({
        _id: banda._id // find pelo id
    }, {
        velocidade: banda.velocidade, // atualiza campo velocidade
        tecnologia: banda.tecnologia  // atualiza campo tecnologia
    }, {
        new: true,          // return updated doc
        runValidators: true // validate before update
    }).then(doc => {
        console.log(doc)
    }).catch(err => {
        console.error(err)
    })
}

exports.Find = function(banda) {
    let bandaModel = new BandaModel({
        velocidade: banda.velocidade,
        tecnologia: banda.tecnologia
    });

    bandaModel.find({
        velocidade: banda.velocidade,
        tecnologia: banda.tecnologia
    }).sort({
        velocidade: 1,
        tecnologia: 2
    }).exec()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
}

exports.Delete = function(id) {
    let bandaModel = new BandaModel({
        _id: id
    });

    bandaModel.findOneAndRemove({
        _id: _id
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.error(err)
    })
}