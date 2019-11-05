registrationModule.controller('menuController', function($scope) {

    console.log('ESTOY en el controler del menu');
    $(".sidebar-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("[data-role=dropdown]").dropdown();

});