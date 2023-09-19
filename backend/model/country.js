/* eslint-disable quote-props */


const mongoose = require("mongoose")
const { Schema } = mongoose;

const countrySchema = new Schema({
    'countryName': {
        'type': String,
        'unique': true
    },
    
}, { 'timestamps': true } );

const Country = mongoose.model('country', countrySchema);

module.exports = Country
