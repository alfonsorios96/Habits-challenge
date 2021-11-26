const countryController = require('../controllers/countries');
const {responses} = require('../utils/services');

const getAll = async (request, response) => {
    try {
        const countries = await countryController.read();
        response.status(200).json(responses(200, countries));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const create = async (request, response) => {
    const {name, iso_code, number_code} = request.body;
    try {
        const payload = await countryController.create(name, iso_code, number_code);
        if (payload.errors) {
            response.status(500).json(responses(500, payload.errors));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const update = async (request, response) => {
    const {name, iso_code, number_code} = request.body;
    const {uid} = request.params;
    try {
        const payload = await countryController.update(uid, name, iso_code, number_code);
        if (payload.errors) {
            response.status(500).json(responses(500, payload.errors));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const remove = async (request, response) => {
    const uid = request.params.uid;
    try {
        const payload = await countryController.remove(uid);
        if (payload.errors) {
            response.status(500).json(responses(500, payload.errors));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

module.exports = {getAll, create, update, remove};
