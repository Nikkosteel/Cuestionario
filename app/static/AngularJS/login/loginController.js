registrationModule.controller('loginController', function ($scope, $rootScope, $location, loginRepository, localStorageService, userFactory, alertFactory) {

    //*******************************Variables*******************************
    $scope.userData = {};
    $rootScope.ocultarHeader = true;
    //**************************Init del controller**************************
    $scope.init = function () {
        $rootScope.mostrarMenu = 0;
        $scope.userData = userFactory.getUserData();
        if ($rootScope.userData == null || $rootScope.userData == undefined) {
            if (!($('#lgnUser').val().indexOf('[') > -1)) {
                var user = $('#lgnUser').val();
                $rootScope.userData = userFactory.getUsuario(user);
                $rootScope.mostrarMenu = 1;
            } else if (($('#lgnUser').val().indexOf('[') > -1) && !localStorageService.get('lgnUser')) {
                alert('Inicie sesión desde panel de aplicaciones o desde el login.');

            }
        }
    };

    // ************************* Función para logueo *************************
    $scope.iniciaSesion = function (usuario, contrasena) {
        if ((usuario && contrasena) && (usuario != "" && contrasena != "")) {
            loginRepository.validaUsuario(usuario, contrasena).then(function (result) {
                console.log(result.data, "El usuario")

                if (result.data[0].result == 1) {
                    console.log("Access Granted");
                } else if (result.data[0].result == 2) {
                    alertFactory.successTopFull(result.data[0].msg)

                    setTimeout(function () {
                        console.log('Entre en Time')
                        loginRepository.enviaCorreo(result.data[0].usuario,result.data[0].token,result.data[0].idRegistro).then(function (data){
                            if(data.data[0].estatus==1){
                             console.log ("Correo Enviado")    
                            }

                        },  function(err){
                            console.log(err)

                        });
                       
                       
                    }, 5000)


                 




                } else if (result.data[0].result == 3) {
                    alertFactory.errorTopFull(result.data[0].msg)
                } else {
                    alertFactory.infoTopFull(result.data[0].msg);
                }
            });
        }
        else {
            alertFactory.errorTopFull('Valide el usuario y/o contraseña');
        }
        // loginRepository.getIdUsuario(usuario, contrasena).then(function(result) {
        //     if (result.data.length > 0) {
        //         //$scope.userData = userFactory.saveUserData(result.data[0]);
        //         $scope.idUsuario = result.data[0].idUsuarioPanel;
        //         console.log($scope.idUsuario)
        //         $rootScope.userData = userFactory.getUsuario($scope.idUsuario);
        //     } else {
        //         alertFactory.info('Valide el usuario y/o contraseña');
        //     }

        // });
    };
    $scope.accesoEncuesta = function () {
        $location.path("/")
    }       
});
