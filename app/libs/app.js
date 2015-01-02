require.config({
    paths: {
        material: "vendor/bootstrap-material-design/dist/js/material",
        ripples: "vendor/bootstrap-material-design/dist/js/ripples",
        "jquery-legacy": "vendor/jquery-legacy/dist/jquery",
        "jquery-modern": "vendor/jquery-modern/dist/jquery",
        pagepiling: "vendor/pagepiling.js/jquery.pagepiling.min",
        requirejs: "vendor/requirejs/require",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap"
    },
    shim: {
        "jquery-legacy": {
            exports: "$"
        },
        "jquery-modern": {
            exports: "$"
        },
        ripples: {
            exports: "$.ripples",
            deps: [
                "jquery-modern"
            ]
        },
        bootstrap: {
            deps: [
                "jquery-legacy"
            ]
        },
        material: {
            exports: "$.material",
            deps: [
                "jquery-modern",
                "ripples",
                "bootstrap"
            ],
            init: function () {
                $.material.init();
            }
        },
        pagepiling: {
            exports: "$.fn.pagepiling",
            deps: [
                "jquery-legacy"
            ]
        }
    }
});

require(['core/modules/main']);