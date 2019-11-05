(function($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            nombre: {
                required: true,
            },
            estadoCivil: {
                required: true
            },
            gender: {
                required: true
            },
            termino:{
                required: true
            },
            empresa:{
                required: true
            },
            edad:{
                required: true
            },
            nivelEstudio:{
                required: true
            },
            ocupacion:{
                required: true
            },
            departamento:{
                required: true
            },
            jornada:{
                required: true
            },
            rotacion:{
                required: true
            },
            puestoActual:{
                required: true
            },
            experienciaLaboral:{
                required: true
            },
            correo:{
                required: true
            }
            // , 
            // valida:{
            //     required: true
            // }
        },
        messages : {
            estadoCivil: {
                estadoCivil: 'Not a valid email address <i class="zmdi zmdi-info"></i>'
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        labels: {
            previous: 'Anterior',
            next: 'Siguiente',
            finish: 'Guardar',
            current: ''
        },
        titleTemplate: '<div class="title"><span class="number">#index#</span>#title#</div>',
        onStepChanging: function(event, currentIndex, newIndex) {
            // angular.element('#cuestionario').scope().validaEmpleado();
            // alert( angular.element("#valida").val());
           
            form.validate().settings.ignore = ":disabled,:hidden";
            // if( angular.element("#valida").val()==''){
            //     return false;
            // }
            // console.log(form.steps("getCurrentIndex"));
            return form.valid();
        },
        onFinishing: function(event, currentIndex) {
          
            form.validate().settings.ignore = ":disabled";
            //console.log(getCurrentIndex);
            return form.valid();
        },
        onFinished: function(event, currentIndex) {
            angular.element('#cuestionario').scope().guardar();
            angular.element('#cuestionario').scope().$apply()
            //alert('Sumited');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "*",
        remote: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });


    $.dobPicker({
        daySelector: '#expiry_date',
        monthSelector: '#expiry_month',
        yearSelector: '#expiry_year',
        dayDefault: 'DD',
        yearDefault: 'YYYY',
        minimumAge: 0,
        maximumAge: 120
    });

    $('#password').pwstrength();

    $('#button').click(function () {
        $("input[type='file']").trigger('click');
    })
    
    $("input[type='file']").change(function () {
        $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
    })

})(jQuery);