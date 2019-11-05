var loginURL = global_settings.urlCORS + 'api/login/';

registrationModule.factory('loginRepository', function($http) {
    return {
        getUsuario: function(idUsuario) {
            return $http({
                url: loginURL + 'usuario/',
                method: "GET",
                params: {
                    idUsuario: idUsuario
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getIdUsuario: function(usuario, contrasena) {
            return $http({
                url: loginURL + 'idUsuario/',
                method: "GET",
                params: {
                    usuario: usuario,
                    contrasena: contrasena
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        }
        ,
        validaUsuario: function(usuario, pass) {
            return $http({
                url: loginURL + 'validaUsuario/',
                method: "GET",
                params: {
                    usuario: usuario,
                    pass: pass
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
         enviaCorreo: function (usuario,  token, idRegistro) {
            return $http.post(loginURL + 'sendMail/', {
                usuario: usuario,
                idRegistro: idRegistro,
                token: token
            });
        }

    };

});
