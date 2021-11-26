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

const create = (request, response) => {

};

const update = (request, response) => {

};

const remove = async (request, response) => {
    const uid = request.params.uid;
    try {
        await countryController.remove(uid);
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

module.exports = {getAll, create, update, remove};
