const jwt = require('jsonwebtoken');
const {responses} = require('../utils/services');

const authorize = (request, response, next) => {
    const token = request.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
            if (error) {
                return response.status(403).json(responses(403, error));
            } else {
                request.decoded = decoded;
                next();
            }
        });

    } else {
        return response.status(401).send(responses(401));
    }
};

module.exports = {authorize};
