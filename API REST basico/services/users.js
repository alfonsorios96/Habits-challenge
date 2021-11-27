const userController = require('../controllers/users');
const {responses} = require('../utils/services');

const getAll = async (request, response) => {
    try {
        const users = await userController.read();
        response.status(200).json(responses(200, users));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const create = async (request, response) => {
    const {name, age, country_code, username, password} = request.body;
    try {
        const payload = await userController.create(name, age, country_code, username, password);
        if (payload.message) {
            response.status(500).json(responses(500, payload.message));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const update = async (request, response) => {
    const {name, age, country_code, username, password, status} = request.body;
    const {uid} = request.params;
    try {
        const payload = await userController.update(uid, name, age, status, country_code, username, password);
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
        const payload = await userController.remove(uid);
        if (payload && payload.errors) {
            response.status(500).json(responses(500, payload.errors));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

module.exports = {getAll, create, update, remove};
