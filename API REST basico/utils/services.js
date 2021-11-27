const responses = (status, data = {}) => {
    switch (status) {
        case 200:
            return {
                "code": 200,
                "message": "Ok",
                "success": true,
                "data": data,
                "i18n": "ok",
                "global": {
                    "es": "¡Éxito!",
                    "en": "Success!",
                    "pt": "Sucesso!"
                }
            };
        case 401:
            return {
                "code": 401,
                "message": "Unauthorized",
                "success": false,
                "error": data,
                "i18n": "unauthenticated",
                "global": {
                    "es": "No identificado",
                    "en": "Unauthorized!",
                    "pt": "Não autorizado!"
                }
            };
        case 403:
            return {
                "code": 403,
                "message": "Forbidden",
                "success": false,
                "error": data,
                "i18n": "forbbiden",
                "global": {
                    "es": "Acción prohibida",
                    "en": "Forbidden!",
                    "pt": "Proibido!"
                }
            };
        case 500:
        default:
            return {
                "code": 500,
                "message": "Internal server error",
                "success": false,
                "error": data,
                "i18n": "internal_server_error",
                "global": {
                    "es": "Error interno del servidor",
                    "en": "Error Internal server error",
                    "pt": "Erro Erro de servidor interno"
                }
            };
    }
};

module.exports = {responses};
