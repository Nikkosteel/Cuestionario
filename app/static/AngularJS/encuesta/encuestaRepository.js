var encuestaURL = global_settings.urlCORS + 'api/encuesta/';

registrationModule.factory('encuestaRepository', function($http) {
    return {
        getUsuario: function(idUsuario) {
            return $http({
                url: encuestaURL + 'usuario/',
                method: "GET",
                params: {
                    idUsuario: idUsuario
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getSexo: function() {
            return $http({
                url: encuestaURL + 'sexo/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getEdadAnios: function() {
            return $http({
                url: encuestaURL + 'edad/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getEstadoCivil: function() {
            return $http({
                url: encuestaURL + 'estadoCivil/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getNivelEstudios: function() {
            return $http({
                url: encuestaURL + 'nivelEstudios/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getEmpresa: function() {
            return $http({
                url: encuestaURL + 'empresas/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getPuesto: function() {
            return $http({
                url: encuestaURL + 'tipoPuesto/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getContratacion: function() {
            return $http({
                url: encuestaURL + 'tipoContratacion/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getTipoPersonal: function() {
            return $http({
                url: encuestaURL + 'tipoPersonal/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getTipoJornada: function() {
            return $http({
                url: encuestaURL + 'tipoJornada/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getRotacionTurno: function() {
            return $http({
                url: encuestaURL + 'rotacionTurnos/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getExperienciaActual: function() {
            return $http({
                url: encuestaURL + 'experienciaActual/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getExperienciaLaboral: function() {
            return $http({
                url: encuestaURL + 'experienciaLaboral/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getObtenerPreguntas: function(idCuestionario, idNomina) {
            return $http({
                url: encuestaURL + 'obtenerPreguntas/',
                method: "GET",
                params: {
                    idCuestionario: idCuestionario,
                    idNomina: idNomina
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        postRespuestas: function(respuestas,respuestas2, respuestas3) {
            return $http({
                url: encuestaURL + 'guardarRespuestas/',
                method: "POST",
                data: {
                        resp1: respuestas,
                        resp2: respuestas2,
                        resp3: respuestas3
                    },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        },
        getValidarEmpleado: function(idEmpresa,nombre, apellidoPaterno, apellidoMaterno) {
            return $http({
                url: encuestaURL + 'validarEmpleado/',
                method: "GET",
                params: {
                    idEmpresa: idEmpresa,
                    nombre: nombre,
                    apellidoPaterno: apellidoPaterno,
                    apellidoMaterno: apellidoMaterno
                },
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        }
    };

});