var LoginView = require('../views/reference'),
    LoginModel = require('../models/dataAccess'),
    nodemailer = require('nodemailer')


var Login = function(conf) {
    this.conf = conf || {};

    this.view = new LoginView();
    this.model = new LoginModel({
        parameters: this.conf.parameters
    });

    this.response = function() {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};


Login.prototype.get_usuario = function(req, res, next) {

    var self = this;

    var params = [{ name: 'idUsuario', value: req.query.idUsuario, type: self.model.types.INT }];

    self.model.query('SEL_USUARIO_SP', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Login.prototype.get_idUsuario = function(req, res, next) {

    var self = this;

    var params = [{ name: 'usuario', value: req.query.usuario, type: self.model.types.STRING },
        { name: 'contrasena', value: req.query.contrasena, type: self.model.types.STRING }
    ];

    self.model.query('SEL_LOGIN_SP', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};

Login.prototype.get_validaUsuario = function(req, res, next) {

    var self = this;

    var params = [{ name: 'usuario', value: req.query.usuario, type: self.model.types.STRING },
        { name: 'pass', value: req.query.pass, type: self.model.types.STRING }
    ];

    self.model.query('SP_VALIDA_USUARIO_SP', params, function(error, result) {
        self.view.expositor(res, {
            error: error,
            result: result
        });
    });
};


//////////////////////////////////////////////////////////////////////////////
//            ENVIO CORREO PARA ACTIVACION DE CUENTA
//////////////////////////////////////////////////////////////////////////////
Login.prototype.post_sendMail = function (req, res, next) {

    var rutaActivaCuenta = this.conf.parameters.rutaActivaCuenta;

    return new Promise(function (resolve, reject) {

        var email = req.body.usuario;
        var idRegistro = req.body.idRegistro;
        var token = req.body.token;

        //console.log('**Token y RFC')
        //console.log(token)
        //console.log(rfc)

        //Creo un objeto de Transporte reutilizable usando SMTP
        var transporter = nodemailer.createTransport({
            host: '192.168.20.17',
            port: 25,
            secure: false,
            ignoreTLS: true,
            auth: {
                user: 'noreply',
                pass: 'P4n4m4!'
            }
        });

        //Datos para enviar el Email
        var message = {
            from: '"Grupo Andrade"<grupoandrade.reportes@grupoandrade.com.mx>', //De
            to: email, //Para
            subject: '"Activacion de Cuenta al Portal "', //Asunto
            html: `<table style="height: 401px; width: 100%;" border="0" width="826" cellspacing="0">
                <tbody>
                    <tr style="height: 15px;" bgcolor="#f5f5f5">
                        <td>&nbsp;</td>
                        <td style="width:600px">
                            <td>&nbsp;</td>
                    </tr>
                    <tr bgcolor="#f5f5f5">
                        <td>&nbsp;</td>
                        <td bgcolor="#FCFAFB" style="width:600px"> &nbsp; </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr bgcolor="#f5f5f5">
                        <td>&nbsp;</td>
                        <td bgcolor="#FCFAFB" style="width:600px">
                            <center><img id="headerImage" src="http://griant.mx/images/Logo-Grupo-Andrade-Min.jpg" alt="" /></center>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr bgcolor="#f5f5f5">
                        <td>&nbsp;</td>
                        <td style="padding: 15px; width:600px" bgcolor="#FCFAFB">
                            <h3 style="font-size: 20px; font-family: 'Raleway', sans-serif; font-style: normal;"><span style="color: #333;">Portal Proveedores</span></h3>
                            <p style="font-size: 16px; line-height: 24px; font-family: 'Raleway', sans-serif; font-style: normal;">
                                <span style="color: #333;">Este es un correo de Activación al Portal . Para Activar la cuenta, de click en el siguiente enlace: <a href="` + rutaActivaCuenta + `activacionCuenta?token=` + token.toUpperCase() + `&idRegistro=` + idRegistro + `">Activar Cuenta</a></span>
                            </p>
                            <br />
                        </td>
                        <td bgcolor="#f5f5f5">&nbsp;</td>
                    </tr>
                    <tr bgcolor="#f5f5f5">
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>&nbsp;</td>
                        <td>
                            <p style="font-size: 10px; font-family: tahoma; color: #999; padding: 15px;">&copy;2018 Todos los derechos reservados.
                                <br /> Este e-mail fue enviado autom&aacute;ticamente, favor de no responderlo.</p>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>` //HTML  
        };

        //Enviamos el Email
        transporter.sendMail(message, function (err) {
            if (!err) {

                object = {
                    estatus: 1,
                    mensaje: "¡Email enviado!"
                }
            } else {
console.log("Error",err);
                object = {
                    estatus: 0,
                    mensaje: "¡Error en el Envio!!!!!"
                }
            }
            res.json(object);
        });

        transporter.close;
        req.body = [];

    });
}
//////////////////////////////////////////////////////////////////////////////

module.exports = Login;
