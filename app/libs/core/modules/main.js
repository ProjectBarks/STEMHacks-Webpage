require(['pagepiling', 'core/modules/ui'],
    function (piling, ui) {
        ui.loader();
        $(document).ready(function () {
            $('#pagepiling').pagepiling({
                navigation: false,
                sectionsColor: ['#F5F5F5', '#4285F4', '#F5F5F5', '#39C'],
                anchors: ["home-ac", "about-ac", "faq-ac", "contact-ac"],
                css3: true,
                scrollingSpeed: 400,
                afterRender: function () {
                    ui.update(0);
                    ui.fabCheck(true);
                },
                afterLoad: function () {
                    ui.fabCheck();
                },
                onLeave: function (index, nextIndex) {
                    ui.update(nextIndex - 1);
                }
            });
            $("#homefab").click(function() {
                $('#pagepiling').pagepiling.moveSectionDown();
            });
        });
        $(window).resize(function () {
            ui.fabCheck(true);
        });
        ui.init();

    }
);

require(['core/modules/buttons'],
    function (buttons) {
        buttons.initFacebook();
        buttons.initGithub();
        buttons.initEmail();
        buttons.initTwitter();
    }
);

require(['material'], function () {
    $.material.init();
});

require(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyAP6CVT5G7z0jYoUdfqrzv5YUgwURmBneA&sensor=false&extension=.js', 'jquery'], function () {

    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(40.009011, -75.714171),
            zoom: 15,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable: false,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#4285F4"}, {"visibility": "on"}]}]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.009011, -75.714171),
            map: map,
            title: 'STEMHacks',
            icon: 'libs/core/location.svg'
        });
        var infowindow = new google.maps.InfoWindow({
            content: "We are here!"
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }
});