require(['pagepiling', 'core/modules/ui'],
    function (piling, ui) {
        ui.loader();
        $(document).ready(function () {
            $('#pagepiling').pagepiling({
                navigation: false,
                sectionsColor: ['#F5F5F5', '#4285F4', '#2C3E50', '#39C'],
                afterRender: function () {
                    ui.update(0);
                    var fabCheck = setInterval(function () {
                        ui.fabCheck(true);
                    }, 10);
                    setTimeout(function () {
                        clearInterval(fabCheck);
                    }, 500)

                },
                afterLoad: function () {
                    ui.fabCheck();
                },
                onLeave: function (index, nextIndex) {
                    ui.update(nextIndex - 1);
                }
            });
        });
    }
);

require(['jquery-legacy', 'core/modules/ui'],
    function(jquery, ui) {
        $(window).resize(function () {
            ui.fabCheck(true);
        });
    }
);