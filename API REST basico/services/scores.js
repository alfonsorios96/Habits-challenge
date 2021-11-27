const scoreController = require('../controllers/scores');
const {responses} = require('../utils/services');

const getAll = async (request, response) => {
    try {
        const scores = await scoreController.read();
        response.status(200).json(responses(200, scores));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const create = async (request, response) => {
    const {username, score} = request.body;
    try {
        const payload = await scoreController.create(username, score);
        if (payload.message) {
            response.status(500).json(responses(500, payload.message));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

const update = async (request, response) => {
    const {username, score, status} = request.body;
    const {uid} = request.params;
    try {
        const payload = await scoreController.update(uid, username, score, status);
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
        const payload = await scoreController.remove(uid);
        if (payload && payload.errors) {
            response.status(500).json(responses(500, payload.errors));
        }
        response.status(200).json(responses(200, payload));
    } catch (error) {
        response.status(500).json(responses(500, error));
    }
};

module.exports = {getAll, create, update, remove};
