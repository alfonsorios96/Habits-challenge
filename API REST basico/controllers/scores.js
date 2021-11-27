const Score = require('../models/scores');
const User = require('../models/user');
const {ObjectId} = require('mongodb');

const read = async () => {
    return await Score.find().populate('username');
};

const create = async (username, score) => {
    const new_score = {};
    if (username && username !== '') {
        try {
            const user = await User.findOne({username});
            new_score.username = user._id;
        } catch (error) {
            return error;
        }
    }
    if (score && score >= 0) {
        new_score.score = score;
    }
    new_score.status = true;
    new_score.date = new Date();
    try {
        return await Score.create(new_score);
    } catch (error) {
        return error;
    }
};

const update = async (uid, username, score, status) => {
    const current_score = await Score.findById(uid);
    const score_updated = {};
    if (score && score >= 0) {
        score_updated.score = score;
    }
    score_updated.status = status;
    if (username && username !== '') {
        try {
            const user = await User.findOne({username});
            return await Score.updateOne(
                {'_id': ObjectId(uid)},
                {
                    $set: {
                        score: score_updated.score || current_score.score,
                        status: score_updated.status !== current_score.status ? score_updated.status : current_score.status,
                        username: user._id || current_score.username
                    }
                }
            );
        } catch (error) {
            return error;
        }
    }
};

const remove = async (uid) => {
    try {
        return await Score.findByIdAndDelete(uid);
    } catch (error) {
        return error;
    }
};

module.exports = {create, read, update, remove};
