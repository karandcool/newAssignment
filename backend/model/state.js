/* eslint-disable quote-props */


const mongoose = require("mongoose")
const { Schema } = mongoose;

const stateSchema = new Schema({
    'stateName': {
        'type': String,
        'unique': true
    },
    'country': {
        'type': mongoose.SchemaTypes.ObjectId,
        'ref': 'country',
        // 'autopopulate': true
    },
    
}, { 'timestamps': true } );
stateSchema.plugin(require('mongoose-autopopulate'));

const State = mongoose.model('state', stateSchema);

module.exports = State
