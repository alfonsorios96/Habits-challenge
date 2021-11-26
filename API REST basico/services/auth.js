const jwt = require('jsonwebtoken');

const login = (request, response) => {
    const user = request.body;
    const user_demo = {
        username: 'habits-test',
        password: 'habits-test'
    };
    const match = user.username === user_demo.username && user.password === user_demo.password;
    if (match) {
        const token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        response.status(200).json({
            "code": 200,
            "message": "Ok",
            "success": true,
            "data": {
                "token": token
            },
            "i18n": "ok",
            "global": {
                "es": "¡Éxito!",
                "en": "Success!",
                "pt": "Sucesso!"
            }
        });
    } else {
        response.status(400).json({
            "code": 401,
            "message": "Unauthorized",
            "success": false,
            "error": "ERROR OBJECT",
            "i18n": "unauthenticated",
            "global": {
                "es": "No identificado",
                "en": "Unauthorized!",
                "pt": "Não autorizado!"
            }
        });
    }
};

module.exports = {login};
