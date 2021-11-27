const Country = require('../models/country');
const {ObjectId} = require('mongodb');

const read = async () => await Country.find({});

const create = async (name, iso_code, number_code) => {
    const new_country = {};
    if (name && name !== '') {
        new_country.name = name;
    }
    if (iso_code && iso_code !== '') {
        new_country.iso_code = iso_code;
    }
    if (number_code && number_code !== 0) {
        new_country.number_code = number_code;
    }
    new_country.created_date = new Date();
    new_country.updated_date = new Date();
    const country = new Country(new_country);
    try {
        const payload = await country.save();
        if (payload) {
            return payload;
        }
    } catch (error) {
        return error;
    }
};

const update = async (uid, name, iso_code, number_code) => {
    const current_country = await Country.findById(uid);
    const country_updated = {};
    if (name && name !== '') {
        country_updated.name = name;
    }
    if (iso_code && iso_code !== '') {
        country_updated.iso_code = iso_code;
    }
    if (number_code && number_code !== 0) {
        country_updated.number_code = number_code;
    }
    country_updated.updated_date = new Date();
    try {
        const payload = await Country.updateOne(
            {'_id': ObjectId(uid)},
            {
                $set: {
                    name: country_updated.name || current_country.name,
                    iso_code: country_updated.iso_code || current_country.iso_code,
                    number_code: country_updated.number_code || current_country.number_code,
                    created_date: country_updated.created_date || current_country.created_date,
                    updated_date: country_updated.updated_date || current_country.updated_date
                }
            }
        );
        return payload;
    } catch (error) {
        return error;
    }
};

const remove = async (uid) => {
    try {
        return await Country.findByIdAndDelete(uid);
    } catch (error) {
        return error;
    }
};

module.exports = {create, read, update, remove};
