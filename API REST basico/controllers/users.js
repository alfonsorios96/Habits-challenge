const User = require('../models/user');
const Country = require('../models/country');
const {ObjectId} = require('mongodb');
const bcrypt = require('bcryptjs');

const read = async () => {
    return await User.find().populate('country_code');
};

const create = async (name, age, country_code, username, password) => {
    const new_user = {};
    if (name && name !== '') {
        new_user.name = name;
    }
    if (country_code && country_code !== '') {
        try {
            const country = await Country.findOne({
                iso_code: country_code
            });
            new_user.country_code = country._id;
        } catch (error) {
            return error;
        }
    }
    if (age && age !== 0) {
        new_user.age = age;
    }
    if (username && username !== '') {
        new_user.username = username;
    }
    if (password && password !== '') {
        new_user.password = bcrypt.hashSync(password, 10);
    }
    new_user.status = true;
    try {
        const payload = await User.create(new_user);
        if (payload) {
            return payload;
        }
    } catch (error) {
        return error;
    }
};

const update = async (uid, name, age, status, country_code, username, password) => {
    const current_user = await User.findById(uid);
    const user_updated = {};
    if (name && name !== '') {
        user_updated.name = name;
    }
    if (age && age !== 0) {
        user_updated.age = age;
    }
    user_updated.status = status;
    if (country_code && country_code !== '') {
        const country = await Country.findOne({iso_code: country_code});
        user_updated.country_code = country._id;
    }
    if (username && username !== '') {
        user_updated.username = username;
    }
    if (password && password !== '') {
        user_updated.password = bcrypt.hashSync(password, 10);
    }
    try {
        const country = await Country.findOne({country_code});
        return await User.updateOne(
            {'_id': ObjectId(uid)},
            {
                $set: {
                    name: user_updated.name || current_user.name,
                    age: user_updated.age || current_user.age,
                    status: user_updated.status !== current_user.status ? user_updated.status : current_user.status,
                    country_code: country._id || current_user.country_code,
                    username: user_updated.username || current_user.username,
                    password: user_updated.password || current_user.password
                }
            }
        );
    } catch (error) {
        return error;
    }
};

const remove = async (uid) => {
    try {
        return await User.findByIdAndDelete(uid);
    } catch (error) {
        return error;
    }
};

module.exports = {create, read, update, remove};
