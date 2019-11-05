var registrationModule = angular.module("registrationModule", ["ngRoute", "LocalStorageModule", 'ui.router'])
    .config(function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

        /*cheange the routes*/
        // $routeProvider.when('/', {
        //     templateUrl: 'AngularJS/Templates/login.html',
        //     controller: 'loginController'
        // });
        //--------BEGIN Se comenta para PRuebas
        // $routeProvider.when('/encuesta', {
        //     templateUrl: 'AngularJS/Templates/encuesta.html',
        //     controller: 'encuestaController'
        // });
        // $routeProvider.when('/exito', {
        //     templateUrl: 'AngularJS/Templates/exito.html'
        // });
        // $routeProvider.when('/inicio', {
        //     templateUrl: 'AngularJS/Templates/inicio.html',
        //     controller: 'encuestaController'
        // });
        // $routeProvider.when('/vacio', {
        //     templateUrl: 'AngularJS/Templates/vacio.html'
        // });
        // $routeProvider.when('/salir', {
        //     templateUrl: 'AngularJS/Templates/salir.html'
        // });
        // $routeProvider.when('/aviso', {
        //     templateUrl: 'AngularJS/Templates/aviso.html',
        //     controller: 'encuestaController'
        // });
        // $routeProvider.when('/login', {
        //     templateUrl: 'AngularJS/Templates/login.html',
        //     controller: 'loginController'
        // });
        // $routeProvider.when('/activacionCuenta', {
        //     templateUrl: 'AngularJS/Templates/user.html',
        //     controller: 'userController'
        // });
        // $routeProvider.when('/menu', {
        //     templateUrl: 'AngularJS/Templates/menu.html',
        //     controller: 'menuController'
        // });
        // $routeProvider.otherwise({ redirectTo: '/login' });
        //--------END Se comenta para PRuebas

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('encuestaEncabezado', {
                abstrac: true,
                encuesta: true,
                templateUrl: 'AngularJS/Templates/encuestaEncabezado.html',
                views: {
                    encuesta: {
                        templateUrl: 'AngularJS/Templates/encuestaEncabezado.html'
                    }
                }
            })
            .state('encuestaEncabezado.encuesta', {
                url: '/encuesta',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/encuesta.html',
                controller: 'encuestaController'

            })
            .state('encuestaEncabezado.exito', {
                url: '/exito',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/exito.html'
            })
            .state('encuestaEncabezado.inicio', {
                url: '/inicio',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/inicio.html',
                controller: 'encuestaController'
            })
            .state('encuestaEncabezado.vacio', {
                url: '/vacio',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/vacio.html'
            })
            .state('encuestaEncabezado.salir', {
                url: '/salir',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/salir.html'
            })
            .state('encuestaEncabezado.aviso', {
                url: '/aviso',
                encuesta: true,
                templateUrl: 'AngularJS/Templates/aviso.html',
                controller: 'encuestaController'
            })
            .state('login', {
                url: '/login',
                views: {
                    login: {
                        templateUrl: 'AngularJS/Templates/login.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('activacionCuenta', {
                url: '/activacionCuenta',
                views: {
                    login: {
                        templateUrl: 'AngularJS/Templates/user.html',
                        controller: 'userController'
                    }
                }
            })
            .state('menu', {
                abstrac: true,
                menu: true,
                templateUrl: 'AngularJS/Templates/menu.html',
                controller: 'menuController',
                views: {
                    menu: {
                        templateUrl: 'AngularJS/Templates/menu.html',
                        controller: 'menuController'
                    }
                }
            })
            .state('menu.prueba', {
                url: '/prueba',
                menu: true,
                templateUrl: 'AngularJS/Templates/prueba.html',
                controller: 'pruebaController'
            })
            .state('menu.prueba2', {
                url: '/prueba2',
                menu: true,
                templateUrl: 'AngularJS/Templates/prueba2.html'
            })
            $urlRouterProvider.otherwise('/login');

        // .state('menu', {
        //     url: '/menu',
        //     views: {
        //         menu: {
        //             templateUrl: 'AngularJS/Templates/menu.html',
        //             controller: 'menuController'
        //         }
        //     }
        // })
        // .state('menu.prueba', {
        //     url: '/prueba',
        //     admin: true,
        //     templateUrl: 'AngularJS/Templates/prueba.html'
        // })
    });

registrationModule.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);
        var changeHeight = function() { element.css('height', (w.height() - 20) + 'px'); };
        w.bind('resize', function() {
            changeHeight(); // when window size gets changed
        });
        changeHeight(); // when page loads
    };
});
registrationModule.run(function($rootScope) {
    $rootScope.var = "full";

})