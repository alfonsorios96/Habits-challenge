const mongoose = require('mongoose');

const User = mongoose.model('users', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    country_code: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'countries'
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User;
