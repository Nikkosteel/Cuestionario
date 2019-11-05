var UserView = require('../views/reference'),
    UserModel = require('../models/dataAccess')


var User = function (conf) {
    this.conf = conf || {};

    this.view = new UserView();
    this.model = new UserModel({
        parameters: this.conf.parameters
    });

    this.response = function () {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};


User.prototype.get_validateToken = function (req, res, next) {

    var self = this;

    var params = [{ name: 'idRegistro', value: req.query.idRegistro, type: self.model.types.INT},
                   { name: 'token', value: req.query.token, type: self.model.types.STRING       }];

    self.model.query('UPD_VALIDAR_USUARIO_SP', params, function (error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};





module.exports = User;
