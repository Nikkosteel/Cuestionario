registrationModule.controller('encuestaController', function ($scope, $rootScope, $location, $q, encuestaRepository, localStorageService, userFactory, alertFactory) {
    // -----------------Decalración de variables globales--------------------
    $scope.titulo1 = "";
    $scope.respuestas = {};
    $scope.valida = "";
    $scope.ocultarC2 = false;
    $scope.ocultaC2 = true;
    $scope.ocultaC3 = true;
    $scope.vacio = true;
    $scope.init = function () {
        getSexo();
        getEdadAnios();
        getEstadoCivil();
        getNivelEstudios();
        getEmpresa();
        getPuesto();
        getContratacion();
        getTipoPersonal();
        getTipoJornada();
        getRotacionTurno();
        getExperienciaActual();
        getExperienciaLaboral();

        //Se obtiene la información del cuestionario 1 
        var promiseCuestionario = getObtenerPreguntas(1);
        promiseCuestionario.then(function success(res) {
            $scope.cuestionario1 = [];
            console.log(res, 'Soy las preguntas')
            var cuestionario = res;
            $scope.titulo1 = res[0].descripcionCuestionario;
            $scope.numCustionario = res[0].idCuestionario;
            var tituloSecciones = res.map(item => item.descripcionSeccion)
                .filter((value, index, self) => self.indexOf(value) === index);
            console.log(tituloSecciones)
            var tituloSeccion = "";
            angular.forEach(tituloSecciones, function (value, key) {
                tituloSeccion = value;
                var indexTitulo = key;
                if (key == 0) {
                    $scope.cuestionario1.push({ tituloSeccion, contenido: [], mostrar: true });
                } else {
                    $scope.cuestionario1.push({ tituloSeccion, contenido: [], mostrar: false });
                }

                angular.forEach(cuestionario, function (value, key) {
                    if (value.descripcionSeccion == tituloSeccion) {
                        $scope.cuestionario1[indexTitulo].contenido.push(value);
                    }
                });
            });
            console.log($scope.cuestionario1, "Soy el cuestionario 1");
        }, function error(err) {
            error(err);
        });

        //Se obtiene la información del cuestionario 2 
        var promiseCuestionario2 = getObtenerPreguntas(2);
        promiseCuestionario2.then(function success(res) {
            $scope.cuestionario2 = [];
            console.log(res, 'Soy las preguntas')
            var cuestionario = res;
            $scope.titulo2 = res[0].descripcionCuestionario;
            $scope.numCustionario = res[0].idCuestionario;
            var tituloSecciones = res.map(item => item.descripcionSeccion)
                .filter((value, index, self) => self.indexOf(value) === index);
            console.log(tituloSecciones)
            var tituloSeccion = "";
            angular.forEach(tituloSecciones, function (value, key) {
                tituloSeccion = value;
                var indexTitulo = key;

                $scope.cuestionario2.push({ tituloSeccion, contenido: [], mostrar: true });


                angular.forEach(cuestionario, function (value, key) {
                    if (value.descripcionSeccion == tituloSeccion) {
                        $scope.cuestionario2[indexTitulo].contenido.push(value);
                    }
                });
            });
            console.log($scope.cuestionario2, "Soy el cuestionario 2");
        }, function error(err) {
            error(err);
        });

        //Se obtiene la información del cuestionario 2 
        var promiseCuestionario3 = getObtenerPreguntas(3);
        promiseCuestionario3.then(function success(res) {
            $scope.cuestionario3 = [];
            console.log(res, 'Soy las preguntas')
            var cuestionario = res;
            $scope.titulo3 = res[0].descripcionCuestionario;
            $scope.numCustionario = res[0].idCuestionario;
            var tituloSecciones = res.map(item => item.descripcionSeccion)
                .filter((value, index, self) => self.indexOf(value) === index);
            console.log(tituloSecciones, "Titulo Secciones2")
            var tituloSeccion = "";
            angular.forEach(tituloSecciones, function (value, key) {
                tituloSeccion = value;
                var indexTitulo = key;

                $scope.cuestionario3.push({ tituloSeccion, contenido: [], mostrar: true });


                angular.forEach(cuestionario, function (value, key) {
                    if (value.descripcionSeccion == tituloSeccion) {
                        $scope.cuestionario3[indexTitulo].contenido.push(value);
                    }
                });
            });
            console.log($scope.cuestionario3, "Soy el cuestionario 2");
        }, function error(err) {
            error(err);
        });

    };

    var error = function (mensaje) {
        alertFactory.error(mensaje)
    };
    var getSexo = function () {
        encuestaRepository.getSexo().then(function success(res) {
            $scope.genero = res.data;
            console.log($scope.genero)
        }, function error(err) {
            error(err);
        });
    };
    var getEdadAnios = function () {
        encuestaRepository.getEdadAnios().then(function success(res) {
            $scope.edadAnios = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getEstadoCivil = function () {
        encuestaRepository.getEstadoCivil().then(function success(res) {
            $scope.estadosCivil = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getNivelEstudios = function () {
        encuestaRepository.getNivelEstudios().then(function success(res) {
            $scope.nivelEstudios = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getEmpresa = function () {
        encuestaRepository.getEmpresa().then(function success(res) {
            $scope.empresas = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getPuesto = function () {
        encuestaRepository.getPuesto().then(function success(res) {
            $scope.puestos = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getContratacion = function () {
        encuestaRepository.getContratacion().then(function success(res) {
            $scope.contrataciones = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getTipoPersonal = function () {
        encuestaRepository.getTipoPersonal().then(function success(res) {
            $scope.tiposPersonal = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getTipoJornada = function () {
        encuestaRepository.getTipoJornada().then(function success(res) {
            $scope.tiposJornada = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getRotacionTurno = function () {
        encuestaRepository.getRotacionTurno().then(function success(res) {
            $scope.rotacionTurnos = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getExperienciaActual = function () {
        encuestaRepository.getExperienciaActual().then(function success(res) {
            $scope.experienciaActuales = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getExperienciaLaboral = function () {
        encuestaRepository.getExperienciaLaboral().then(function success(res) {
            $scope.experienciaLaborales = res.data;
        }, function error(err) {
            error(err);
        });
    };
    var getObtenerPreguntas = function (idCuestionario) {
        var deferred = $q.defer();
        encuestaRepository.getObtenerPreguntas(idCuestionario).then(function success(res) {
            deferred.resolve(res.data);
            // $scope.experienciaLaborales = res.data;
        }, function error(err) {
            deferred.reject(result);
            // error(err);
        });
        return deferred.promise;
    };
    $scope.verificaCuestionarios = function () {
        console.log($scope.cuestionario1, 'Verifica-----')
        var contadorNo = 0;
        angular.forEach($scope.cuestionario1[0].contenido, function (value, key) {
            if (value.respuestaNo == 1) {
                contadorNo++;
            }
        });
        if ($scope.cuestionario1[0].contenido.length == contadorNo) {
            angular.forEach($scope.cuestionario1, function (value, key) {
                if (key > 0) {
                    $scope.cuestionario1[key].mostrar = false;
                    var indice = key;
                    angular.forEach($scope.cuestionario1[indice].contenido, function (value1, key1) {
                       
                        value1.respuestaNo = null;
                        value1.respuestaSI = null;
                            
                      
                    });



                }
            });

           


        }
    };
    $scope.muestraCuestionarios = function () {
        angular.forEach($scope.cuestionario1, function (value, key) {
            $scope.cuestionario1[key].mostrar = true;

        });
    };
    $scope.guardar = function () {

        if(validaCuestionarioIII()){
            console.log('SERA QUE FUNCIONA ASI ????');
            console.log($scope.respuestas);
            $scope.respuestas.idCuestionario = $scope.numCustionario;
            $scope.respuestas.terminadoNivel = $scope.terminada;
            var preguntas;
            var preguntas2;
            var preguntas3;
            var respuestas1 = '';
            var respuestas2 = '';
            var respuestas3 = '';
    
    
            angular.forEach($scope.cuestionario1, function (value, key) {
                preguntas = value.contenido;
                angular.forEach(preguntas, function (value, key) {
                    console.log(value.idPregunta);
                    $scope.respuestas['respuesta' + value.idPregunta] = value.respuestaSI == null ? value.respuestaSI : (value.respuestaSI == 1 ? 1 : 0);
    
    
                });
            });
            angular.forEach($scope.cuestionario2, function (value, key) {
                preguntas2 = value.contenido;
    
                angular.forEach(preguntas2, function (value, key) {
                    console.log(value.idPregunta);
    
                    if (value.siempre == 1) {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",1|";
                    } else if (value.casiSiempre == 1) {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",2|";
                    } else if (value.algunasVeces == 1) {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",3|";
                    } else if (value.casiNunca == 1) {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",4|";
                    } else if (value.nunca == 1) {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",5|";
                    } else {
                        respuestas2 = respuestas2 + value.idPregunta.toString() + ",0|";
    
                    }
    
    
                    //$scope.respuestas2['respuesta' + value.idPregunta] = value.respuestaSI == null ? value.respuestaSI : (value.respuestaSI == 1 ? 1 : 0);
                });
            });
            angular.forEach($scope.cuestionario3, function (value, key) {
                preguntas3 = value.contenido;
    
                angular.forEach(preguntas3, function (value, key) {
                    console.log(value.idPregunta);
    
                    if (value.siempre == 1) {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",1|";
                    } else if (value.casiSiempre == 1) {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",2|";
                    } else if (value.algunasVeces == 1) {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",3|";
                    } else if (value.casiNunca == 1) {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",4|";
                    } else if (value.nunca == 1) {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",5|";
                    } else {
                        respuestas3 = respuestas3 + value.idPregunta.toString() + ",0|";
    
                    }
    
    
                    //$scope.respuestas2['respuesta' + value.idPregunta] = value.respuestaSI == null ? value.respuestaSI : (value.respuestaSI == 1 ? 1 : 0);
                });
            });
    
            encuestaRepository.postRespuestas($scope.respuestas, respuestas2, respuestas3).then(function success(res) {
                console.log(res.data[0].result);
                if (res.data[0].result == 1) {
                    location.href = '/exito';
                } else if (res.data[0].result == 0) {
                    error(res.data[0].msg);
                } else {
                    error('Ocurrio un problema');
                }
            }, function error(err) {
                error(err);
            });
    
    
    
            console.log(respuestas2, "respuestas2");
            console.log(respuestas3, "respuestas3");
        }

       
    };


    $scope.validaEmpleado = function () {
        $scope.valida = '';
        if ($scope.respuestas.idEmpresa) {
            encuestaRepository.getValidarEmpleado($scope.respuestas.idEmpresa.id, $scope.respuestas.nombre, $scope.respuestas.apellidoPaterno, $scope.respuestas.apellidoMaterno).then(function success(res) {
                if (res.data[0].result == 1) {
                    error(res.data[0].msg);
                    $scope.valida = '';
                }
                else {
                    $scope.valida = 1;
                }


            });
        }
    };

    $scope.entrarEncuesta = function () {
        location.href = '/encuesta';
    };

    $scope.salirEncuesta = function () {
        location.href = '/salir';
    };

    $scope.entrar = function () {
        location.href = '/inicio';
    };
    $scope.deshabilitar = function () {
        error('No tiene permitido realizar la descarga del documento.');
    };


    $scope.muestraPreguntasAtencionC2 = function (respuesta) {

        console.log($scope.cuestionario2[6].contenido, 'Verificando-----')

        if (respuesta == 1) {
            angular.forEach($scope.cuestionario2[6].contenido, function (value, key) {

                $scope.cuestionario2[6].contenido[key].ocultar = false;

            });
        } else {
            angular.forEach($scope.cuestionario2[6].contenido, function (value, key) {

                $scope.cuestionario2[6].contenido[key].ocultar = true;

            });

        }

        console.log($scope.cuestionario2[6].contenido, 'Verificando Despues-----')
    };


    $scope.muestraPreguntasjefeC2 = function (respuesta) {

        console.log($scope.cuestionario2[7].contenido, 'Verificando-----')

        if (respuesta == 1) {
            angular.forEach($scope.cuestionario2[7].contenido, function (value, key) {

                $scope.cuestionario2[7].contenido[key].ocultar = false;

            });
        } else {
            angular.forEach($scope.cuestionario2[7].contenido, function (value, key) {

                $scope.cuestionario2[7].contenido[key].ocultar = true;

            });

        }

        console.log($scope.cuestionario2[7].contenido, 'Verificando Despues-----')
    };

    $scope.muestraPreguntasAtencionC3 = function (respuesta) {

        console.log($scope.cuestionario3[12].contenido, 'Verificando-----')

        if (respuesta == 1) {
            angular.forEach($scope.cuestionario3[12].contenido, function (value, key) {

                $scope.cuestionario3[12].contenido[key].ocultar = false;

            });
        } else {
            angular.forEach($scope.cuestionario3[12].contenido, function (value, key) {

                $scope.cuestionario3[12].contenido[key].ocultar = true;

            });

        }

        console.log($scope.cuestionario3[12].contenido, 'Verificando Despues-----')
    };


    $scope.muestraPreguntasjefeC3 = function (respuesta) {



        if (respuesta == 1) {
            angular.forEach($scope.cuestionario3[13].contenido, function (value, key) {

                $scope.cuestionario3[13].contenido[key].ocultar = false;

            });
        } else {
            angular.forEach($scope.cuestionario3[13].contenido, function (value, key) {

                $scope.cuestionario3[13].contenido[key].ocultar = true;

            });

        }

        console.log($scope.cuestionario3[13].contenido, 'Verificando Despues-----')
    };

    $scope.seleccionarEmpresa = function () {
        console.log($scope.respuestas.idEmpresa, "Id Empresa");
        if ($scope.respuestas.idEmpresa.idCuestionario == 2) {
            $scope.ocultaC2 = false;
            $scope.ocultaC3 = true;
            $scope.vacio = false;
        } else if ($scope.respuestas.idEmpresa.idCuestionario == 3) {
            $scope.ocultaC2 = true;
            $scope.ocultaC3 = false;
            $scope.vacio = false;
        }

    };
    $scope.validaCuestionarioII = function() {
        var contenido;
        var contador = 0;
        if($scope.ocultaC2){
            return true;
        }else{
            angular.forEach($scope.cuestionario2, function(value, key) {
                contenido = value.contenido;
                angular.forEach(contenido, function(value, key) {
                    if (value.ocultar == false) {
                        if (!value.algunasVeces && !value.casiNunca && !value.casiSiempre && !value.nunca && !value.siempre) {
                            contador++;
                        }
                    }
                });
            });
            if (contador > 0) {
                alertFactory.error('Es necesario llenar todas las respuestas');
                return false;
            } else {
                return true;
            }

        }
      
    };
    var validaCuestionarioIII = function() {
        var contenido;
        var contador = 0;
        if($scope.ocultaC3){
            return true;
        }else{
            angular.forEach($scope.cuestionario3, function(value, key) {
                contenido = value.contenido;
                angular.forEach(contenido, function(value, key) {
                    if (value.ocultar == false) {
                        if (!value.algunasVeces && !value.casiNunca && !value.casiSiempre && !value.nunca && !value.siempre) {
                            contador++;
                        }
                    }
                });
            });
            if (contador > 0) {
                alertFactory.error('Es necesario llenar todas las respuestas');
                return false;
            } else {
                return true;
            }

        }
    };

    $scope.validaCuestionarioI = function() {
        var contenido;
        var contador = 0;
      
            angular.forEach($scope.cuestionario1, function(value, key) {
                contenido = value.contenido;
                if(value.mostrar){
                    angular.forEach(contenido, function(value, key) {
                      

                        
                            if (!value.respuestaNo && !value.respuestaSI) {
                                contador++;
                            }
                      
                    });

                }

               
            });
            if (contador > 0) {
                alertFactory.error('Es necesario llenar todas las respuestas');
                return false;
            } else {
                return true;
            }

       
    };


});