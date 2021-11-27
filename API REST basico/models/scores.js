const mongoose = require('mongoose');

const Score = mongoose.model('scores', {
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = Score;
