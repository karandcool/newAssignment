/* eslint-disable quote-props */


const mongoose = require("mongoose")
const { Schema } = mongoose;

const citySchema = new Schema({
    'cityName': {
        'type': String,
        'unique': true
    },
    'state': {
        'type': mongoose.SchemaTypes.ObjectId,
        'ref': 'state',
        // 'autopopulate': true
    },
    
}, { 'timestamps': true } );

citySchema.plugin(require('mongoose-autopopulate'));

const City = mongoose.model('city', citySchema);

module.exports = City
