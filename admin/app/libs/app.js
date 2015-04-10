require.config({
    paths: {
        bootstrap: "vendor/bootstrap/dist/js/bootstrap",
        material: "vendor/bootstrap-material-design/dist/js/material",
        ripples: "vendor/bootstrap-material-design/dist/js/ripples",
        jquery: "vendor/jquery/dist/jquery",
        pagepiling: "vendor/pagepiling.js/jquery.pagepiling.min",
        requirejs: "vendor/requirejs/require",
        toastr: "vendor/toastr/toastr",
        channel: "vendor/channel/index"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        ripples: {
            exports: "$.ripples",
            deps: [
                "jquery"
            ]
        },
        bootstrap: {
            deps: [
                "jquery"
            ]
        },
        material: {
            exports: "$.material",
            deps: [
                "jquery",
                "ripples",
                "bootstrap"
            ]
        },
        pagepiling: {
            exports: "$.fn.pagepiling",
            deps: [
                "jquery"
            ]
        },
        toastr: {
            exports: "toastr",
            deps: [
                "jquery"
            ]
        }
    },
    urlArgs: "bust=v2",
    packages: [

    ]
});

require(['material'], function () {
    $.material.init();
});

require(['toastr'], function(toastr) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
});