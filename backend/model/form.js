
const mongoose = require("mongoose")
const { Schema } = mongoose;

const FormSchema = new Schema({
    'firstName': {
        'type': String,
        'required': true
    },
    'lastName': {
        'type': String,
        'required': true

    },

    'email': {
        'type': String,
        'required': true

    },
    'country': {
        'type': String,
        'required': true

    },
    'state': {
        'type': String,
        'required': true

    },
    'city': {
        'type': String,
        'required': true

    },
    'gender': {
        'type': String,
        'required': true

    },
    'dob': {
        'type': Date,
        'required': true

    },
    'age': {
        'type': Number

    },
    
}, { 'timestamps': true } );

const Form = mongoose.model('form', FormSchema);

module.exports = Form
