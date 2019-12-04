import mongoose from 'mongoose';

module.exports = mongoose.model('Banda', BandaSchema);
var dbHost = "localhost:27017/db-banda"

var db = mongoose.connect(dbHost);