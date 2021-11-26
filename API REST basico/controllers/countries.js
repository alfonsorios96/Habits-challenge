const Country = require('../models/country');
const {ObjectId} = require('mongodb');
const {datesUtils} = require('../utils');

const read = async () => await Country.find({});

const create = async (name, iso_code, number_code, created_date, updated_date) => {
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
    if (created_date && datesUtils.isDate(created_date)) {
        new_country.created_date = new Date(created_date);
    }
    if (updated_date && datesUtils.isDate(updated_date)) {
        new_country.updated_date = new Date(updated_date);
    }
    const country = new Country(new_country);
    const payload = await country.save();
    try {
        if (payload) {
            return payload;
        }
    } catch (e) {
        // Catch exceptions
    }
};

const update = async (uid, name, iso_code, number_code, created_date, updated_date) => {
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
    if (created_date && datesUtils.isDate(created_date)) {
        country_updated.created_date = new Date(created_date);
    }
    if (updated_date && datesUtils.isDate(updated_date)) {
        country_updated.updated_date = new Date(updated_date);
    }
    try {
        const payload = await Country.update(
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
        if (payload) {
            return payload;
        }
    } catch (e) {
        // Catch exceptions
    }
};

const remove = async (uid) => {
    try {
        const payload = await Country.findByIdAndDelete(uid);
        if (payload) {
            return payload;
        }
    } catch (e) {
        // Catch exceptions
    }
};

module.exports = {create, read, update, remove};
