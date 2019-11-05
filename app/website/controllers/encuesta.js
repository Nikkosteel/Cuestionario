var EncuestaView = require('../views/reference'),
    EncuestaModel = require('../models/dataAccess')


var Encuesta = function (conf) {
    this.conf = conf || {};

    this.view = new EncuestaView();
    this.model = new EncuestaModel({
        parameters: this.conf.parameters
    });

    this.response = function () {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};


Encuesta.prototype.get_usuario = function (req, res, next) {

    var self = this;

    var params = [{ name: 'idUsuario', value: req.query.idUsuario, type: self.model.types.INT }];

    self.model.query('SEL_USUARIO_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};


Encuesta.prototype.get_sexo = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_SEXO_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};


Encuesta.prototype.get_edad = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_EDAD_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_estadoCivil = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_ESTADO_CIVIL_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_nivelEstudios = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_NIVEL_ESTUDIOS_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_empresas = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_EMPRESAS_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_tipoPuesto = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_TIPO_PUESTO_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_tipoContratacion = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_TIPO_CONTRATACION_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_tipoPersonal = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_TIPO_PERSONAL_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_tipoJornada = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_TIPO_JORNADA_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_rotacionTurnos = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_ROTACION_TURNOS_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_experienciaActual = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_EXPERIENCIA_ACTUAL_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};


Encuesta.prototype.get_experienciaLaboral = function (req, res, next) {

    var self = this;

    var params = [];

    self.model.query('SEL_EXPERIENCIA_LABORAL_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_obtenerPreguntas = function (req, res, next) {

    var self = this;



    var params = [{ name: 'idCuestionario', value: req.query.idCuestionario, type: self.model.types.INT },
    { name: 'idNomina', value: req.query.idCuestionario, type: self.model.types.STRING }
    ];

    self.model.query('SEL_PREGUNTAS_PERSONA_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};


Encuesta.prototype.post_guardarRespuestas = function (req, res, next) {

    var self = this;

    // console.log(req.body, 'Soy el apellido');
    console.log("=========================");
    console.log('Respuesta 1', req.body.resp1);
    // console.log('Nombre', req.body.resp1.nombre);
    // console.log('idCuestionario', req.body.resp1.idEmpresa.idCuestionario);
    // console.log('nombre', req.body.resp1.respuestas.apellidoPaterno);

    var params = [  { name: 'idCuestionario', value: req.body.resp1.idCuestionario, type: self.model.types.INT },
                    { name: 'idNomina', value: req.body.resp1.idNomina, type: self.model.types.INT },
                    { name: 'nombre', value: req.body.resp1.nombre, type: self.model.types.STRING },
                    { name: 'apellidoPaterno', value: req.body.resp1.apellidoPaterno, type: self.model.types.STRING },
                    { name: 'apellidoMaterno', value: req.body.resp1.apellidoMaterno, type: self.model.types.STRING },
                    { name: 'sexo', value: req.body.resp1.sexo, type: self.model.types.INT },
                    { name: 'idEdad', value: req.body.resp1.idEdad.id, type: self.model.types.INT },
                    { name: 'idEstadoCivil', value: req.body.resp1.idEstadoCivil.id, type: self.model.types.INT },
                    { name: 'profesion', value: req.body.resp1.profesion, type: self.model.types.STRING },
                    { name: 'idEmpresa', value: req.body.resp1.idEmpresa.id, type: self.model.types.INT },
                    { name: 'departamento', value: req.body.resp1.departamento, type: self.model.types.STRING },
                    { name: 'telefono', value: req.body.resp1.telefono, type: self.model.types.STRING },
                    { name: 'celular', value: req.body.resp1.celular, type: self.model.types.STRING },
                    { name: 'correo', value: req.body.resp1.correo, type: self.model.types.STRING },
                    // { name: 'idTipoPuesto', value: req.body.idTipoPuesto.id, type: self.model.types.INT },
                    { name: 'idNivelEstudios', value: req.body.resp1.idNivelEstudios.id, type: self.model.types.INT },
                    { name: 'terminadoNivel', value: req.body.resp1.terminadoNivel, type: self.model.types.INT },
                    // { name: 'idTipoContratacion', value: req.body.idTipoContratacion.id, type: self.model.types.INT },
                    // { name: 'idTipoPersonal', value: req.body.idTipoPersonal.id, type: self.model.types.INT },
                    { name: 'idTipoJornada', value: req.body.resp1.idTipoJornada.id, type: self.model.types.INT },
                    { name: 'idRotacionTurnos', value: req.body.resp1.idRotacionTurnos.id, type: self.model.types.INT },
                    { name: 'idExpPuestoActual', value: req.body.resp1.idExpPuestoActual.id, type: self.model.types.INT },
                    { name: 'idExpLaboral', value: req.body.resp1.idExpLaboral.id, type: self.model.types.INT },
                    { name: 'respuesta1', value: req.body.resp1.respuesta1, type: self.model.types.INT },
                    { name: 'respuesta2', value: req.body.resp1.respuesta2, type: self.model.types.INT },
                    { name: 'respuesta3', value: req.body.resp1.respuesta3, type: self.model.types.INT },
                    { name: 'respuesta4', value: req.body.resp1.respuesta4, type: self.model.types.INT },
                    { name: 'respuesta5', value: req.body.resp1.respuesta5, type: self.model.types.INT },
                    { name: 'respuesta6', value: req.body.resp1.respuesta6, type: self.model.types.INT },
                    { name: 'respuesta7', value: req.body.resp1.respuesta7, type: self.model.types.INT },
                    { name: 'respuesta8', value: req.body.resp1.respuesta8, type: self.model.types.INT },
                    { name: 'respuesta9', value: req.body.resp1.respuesta9, type: self.model.types.INT },
                    { name: 'respuesta10', value: req.body.resp1.respuesta10, type: self.model.types.INT },
                    { name: 'respuesta11', value: req.body.resp1.respuesta11, type: self.model.types.INT },
                    { name: 'respuesta12', value: req.body.resp1.respuesta12, type: self.model.types.INT },
                    { name: 'respuesta13', value: req.body.resp1.respuesta13, type: self.model.types.INT },
                    { name: 'respuesta14', value: req.body.resp1.respuesta14, type: self.model.types.INT },
                    { name: 'respuesta15', value: req.body.resp1.respuesta15, type: self.model.types.INT },
                    { name: 'respuesta16', value: req.body.resp1.respuesta16, type: self.model.types.INT },
                    { name: 'respuesta17', value: req.body.resp1.respuesta17, type: self.model.types.INT },
                    { name: 'respuesta18', value: req.body.resp1.respuesta18, type: self.model.types.INT },
                    { name: 'respuesta19', value: req.body.resp1.respuesta19, type: self.model.types.INT },
                    { name: 'respuesta20', value: req.body.resp1.respuesta20, type: self.model.types.INT },
                    { name: 'respuestasCuestionario2', value: req.body.resp2, type: self.model.types.STRING },
                    { name: 'respuestasCuestionario3', value: req.body.resp3, type: self.model.types.STRING }
    ];



     console.log(params)
    self.model.query('INS_RESPUESTAS_CUESTIONARIO1_SP', params, function (error, result) {

console.log('Error',error);
console.log('result',result);

        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Encuesta.prototype.get_validarEmpleado = function (req, res, next) {

    var self = this;



    var params = [  { name: 'nombre', value: req.query.nombre, type: self.model.types.STRING },
                    { name: 'apellidoPaterno', value: req.query.apellidoPaterno, type: self.model.types.STRING },
                    { name: 'apellidoMaterno', value: req.query.apellidoMaterno, type: self.model.types.STRING },
                    { name: 'idEmpresa', value: req.query.idEmpresa, type: self.model.types.INT }
    ];

    console.log("parametros", params)

    self.model.query('SEL_VALIDAR_EMPLEADO_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};



module.exports = Encuesta;
