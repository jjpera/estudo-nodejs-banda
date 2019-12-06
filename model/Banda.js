const restful = require('node-restful')
const mongoose = restful.mongoose

let BandaSchema = new mongoose.Schema({
    velocidade: String,
    tecnologia: {
        type: String,
        enum: ['gpon', 'metalico']
    }
});

BandaSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
BandaSchema.set('toJSON', {
    virtuals: true
});

module.exports = restful.model('Banda', BandaSchema );