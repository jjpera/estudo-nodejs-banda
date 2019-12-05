'use strict'

const restful = require('node-restful')
const mongoose = restful.mongoose

let BandaSchema = new mongoose.Schema({
    velocidade: String,
    tecnologia: {
        type: String,
        enum: ['gpon', 'metalico']
    }
});

//Export function to create "SomeModel" model class
module.exports = restful.model('Banda', BandaSchema );