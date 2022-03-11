const mongoose = require('mongoose');

const bodySchema = mongoose.Schema({
    set:{
        type: String,
        required: true
    },
    telo: {
        type: String,
        required: true
    },
    stranica: {
        type: Number,
        default: ""
    },
    visina: {
        type: Number,
        default: ""
    },
    polmer: {
        type: Number,
        default: ""
    },
    stranicaA:{
        type: Number
    },
    stranicaB:{
        type: Number,
        default: ""
    },
    obseg:{
        type: Number,
        default: ""
    },
    ploscina:{
        type: Number,
        default: ""
    },
    volumen:{
        type: Number,
        default: ""
    }
});

let BodyModel = new mongoose.model('Body', bodySchema);

module.exports = {bodySchema, BodyModel};