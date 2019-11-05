var recibosCajaView = require('../views/reference'),
    recibosCajaModel = require('../models/dataAccess')
var soap = require('soap');
var parseString = require('xml2js').parseString;

var recibosCaja = function(conf) {
    this.conf = conf || {};

    this.view = new recibosCajaView();
    this.model = new recibosCajaModel({
        parameters: this.conf.parameters
    });

    this.response = function() {
        this[this.conf.funcionalidad](this.conf.req, this.conf.res, this.conf.next);
    };
};

recibosCaja.prototype.get_pdfReciboCaja = function(req, res, next) {
    var self = this;
    

    var url = this.conf.parameters.WSReciboCaja;
    if (req.query.tipo && req.query.folio && req.query.nodo) {
        var args = {
            Tipo: req.query.tipo,
            Documento: req.query.folio,
            Nodo: req.query.nodo
        };
        soap.createClient(url, function(err, client) {
            
            if (err) {
                console.log('Error 4', err)

                self.view.expositor(res, {
                    mensaje: "Hubo un problema intente de nuevo",
                });
            } else {
                
                client.GenerarPdfArray(args, function(err, result, raw) {
                    if (err) {
                        

                        self.view.expositor(res, {
                            mensaje: "Hubo un problema intente de nuevo",
                        });
                    } else {
                        //
                        //console.log(raw, 'Soy el raw')
                        //console.log(result,'Sor el resutado ')
                        parseString(raw, function(err, result) {
                            if (err) {
                                

                                self.view.expositor(res, {
                                    mensaje: "Hubo un problema intente de nuevo",
                                });
                            } else {
                                

                                //console.log(result)
                                
                                var arrayBits = result["soap:Envelope"]["soap:Body"][0]["GenerarPdfArrayResponse"][0]["GenerarPdfArrayResult"][0];
                                //var arrayBits = result["soap:Envelope"]["soap:Body"][0]["GenerarPdfResponse"][0]["GenerarPdfResult"][0];
                                //var mensaje = result["soap:Envelope"]["soap:Body"][0]["MuestraFacturaResponse"][0]["MuestraFacturaResult"][0]["mensajeresultado"][0];
                                self.view.expositor(res, {
                                    //mensaje: mensaje,
                                    result: {
                                        arrayBits: arrayBits
                                    }
                                });
                            }
                        });
                    }

                });
            }
        });
    } else {
        
        self.view.expositor(res, {
            mensaje: "Hubo un problema intente de nuevo",
        });
    }
    // var params = [
    //     { name: 'idusuariosolicitante', value: req.query.idUsuario, type: self.model.types.INT },
    //     { name: 'idProceso', value: req.query.idProceso, type: self.model.types.INT },
    //     { name: 'idempresa', value: req.query.idempresa, type: self.model.types.INT },
    //     { name: 'idSucursal', value: req.query.idSucursal, type: self.model.types.INT },
    //     { name: 'iddepartamento', value: req.query.iddepartamento, type: self.model.types.INT },
    //     { name: 'iddivision', value: req.query.iddivision, type: self.model.types.INT },
    //     { name: 'fechaini', value: req.query.fechaini, type: self.model.types.STRING },
    //     { name: 'fechafin', value: req.query.fechafin, type: self.model.types.STRING }
    // ];
    // self.model.query('SEL_DASHBOARD_ENCABEZADO_ORDENES_SP', params, function(error, result) {
    //     self.view.expositor(res, {
    //         error: error,
    //         result: result
    //     });
    // });
}
module.exports = recibosCaja;
