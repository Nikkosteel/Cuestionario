var userURL = global_settings.urlCORS + 'api/user/';

registrationModule.factory('userRepository', function($http) {
    return {
        validateToken: function( idRegistro, token) {
            return $http({
                url: userURL + 'validateToken/',
                method: "GET",
                params: {
                    idRegistro: idRegistro,
                    token: token
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        }
    };

});