const jwt = require('jsonwebtoken');
const {responses} = require('../utils/services');

const login = (request, response) => {
    const user = {...request.body, ...request.query};
    const user_demo = {
        username: 'habits-test',
        password: 'habits-test'
    };
    const match = user.username === user_demo.username && user.password === user_demo.password;
    if (match) {
        const token = jwt.sign(user, process.env.JWT_KEY, {
            expiresIn: '1h'
        });
        response.status(200).json(responses(200, {
            "access_token": token,
            "expires": "1h"
        }));
    } else {
        response.status(401).json(responses(401, user));
    }
};

module.exports = {login};
