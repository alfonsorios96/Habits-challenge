const mongoose = require('mongoose');

const Country = mongoose.model('Country', {
    name: {
        type: String,
        required: true
    },
    iso_code: {
        type: String,
        required: true
    },
    number_code: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    }
});

module.exports = Country;
