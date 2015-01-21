require.config({
    paths: {
        material: "vendor/bootstrap-material-design/dist/js/material",
        ripples: "vendor/bootstrap-material-design/dist/js/ripples",
        pagepiling: "vendor/pagepiling.js/jquery.pagepiling.min",
        requirejs: "vendor/requirejs/require",
        bootstrap: "vendor/bootstrap/dist/js/bootstrap",
        "jquery-ui": "vendor/jquery-ui/jquery-ui",
        async: "vendor/requirejs-plugins/src/async",
        jquery: "vendor/jquery/dist/jquery",
        depend: "vendor/requirejs-plugins/src/depend",
        font: "vendor/requirejs-plugins/src/font",
        goog: "vendor/requirejs-plugins/src/goog",
        image: "vendor/requirejs-plugins/src/image",
        json: "vendor/requirejs-plugins/src/json",
        mdown: "vendor/requirejs-plugins/src/mdown",
        noext: "vendor/requirejs-plugins/src/noext",
        propertyParser: "vendor/requirejs-plugins/src/propertyParser",
        "Markdown.Converter": "vendor/requirejs-plugins/lib/Markdown.Converter",
        text: "vendor/requirejs-plugins/lib/text"
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
        }
    },
    packages: [

    ]
});


require(['core/modules/main']);