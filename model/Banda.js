'use strict'

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var BandaSchema = new Schema({
    id: String,
    velocidade: String,
    tecnologia: String
});