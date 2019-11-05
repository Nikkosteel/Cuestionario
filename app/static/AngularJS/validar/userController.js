registrationModule.controller('userController', function ($scope, $rootScope, $location, $q, userRepository, localStorageService, userFactory, alertFactory) {
    $scope.message = "";
    $scope.mostrarM = true;
    $scope.mostrarE = true;
    if ($location.search().token && $location.search().idRegistro) {
        userRepository.validateToken($location.search().idRegistro, $location.search().token).then(function (result) {

            if (result.data[0].result === 1) {
                $scope.message = "Usuario validado con éxito."
                $scope.mostrarM = true;
                $scope.mostrarE = false;
                alertFactory.successTopFull(result.data[0].msg)

   
                $location.path("/")
   
            } else {
                $scope.mostrarE = true;
                $scope.mostrarM = false;
                $scope.message = result.data[0].msg
                alertFactory.errorTopFull(result.data[0].msg)
            }
        })
    } else {
        $scope.mostrarE = true;
        $scope.mostrarM = false;
        $scope.message = "Petición no valida, favor de contactar al área de sistemas."
        alertFactory.errorTopFull("Petición no valida, favor de contactar al área de sistemas")
    }


});