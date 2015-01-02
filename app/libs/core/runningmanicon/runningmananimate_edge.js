/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'arm-12',
                            type: 'image',
                            rect: ['46px', '-47px', '354px', '355px', 'auto', 'auto'],
                            clip: 'rect(0px 82.82796478271484px 355px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"arm-1.svg",'0px','0px'],
                            transform: [[],['-167']]
                        },
                        {
                            id: 'leg-22',
                            type: 'image',
                            rect: ['116px', '77px', '354px', '355px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leg-2.svg",'0px','0px']
                        },
                        {
                            id: 'leg-12',
                            type: 'image',
                            rect: ['55px', '40px', '354px', '355px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leg-1.svg",'0px','0px'],
                            transform: [[],['-99']]
                        },
                        {
                            id: 'body2',
                            type: 'image',
                            rect: ['98px', '15px', '354px', '355px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"body.svg",'0px','0px']
                        },
                        {
                            id: 'arm-22',
                            type: 'image',
                            rect: ['63px', '-32px', '354px', '355px', 'auto', 'auto'],
                            clip: 'rect(0px 353px 315.60992431640625px 224.9049072265625px)',
                            fill: ["rgba(0,0,0,0)",im+"arm-2.svg",'0px','0px'],
                            transform: [[],['182']]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['104px', '22px', '341px', '342px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"new_new_new_logo3.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid46",
                            "left",
                            0,
                            500,
                            "swing",
                            "${leg-22}",
                            '98px',
                            '116px'
                        ],
                        [
                            "eid87",
                            "left",
                            500,
                            500,
                            "swing",
                            "${leg-22}",
                            '116px',
                            '98px'
                        ],
                        [
                            "eid109",
                            "left",
                            0,
                            500,
                            "swing",
                            "${arm-22}",
                            '63px',
                            '98px'
                        ],
                        [
                            "eid124",
                            "left",
                            500,
                            500,
                            "swing",
                            "${arm-22}",
                            '98px',
                            '63px'
                        ],
                        [
                            "eid111",
                            "top",
                            0,
                            500,
                            "swing",
                            "${arm-22}",
                            '-32px',
                            '15px'
                        ],
                        [
                            "eid123",
                            "top",
                            500,
                            500,
                            "swing",
                            "${arm-22}",
                            '15px',
                            '-32px'
                        ],
                        [
                            "eid115",
                            "left",
                            0,
                            500,
                            "swing",
                            "${arm-12}",
                            '46px',
                            '98px'
                        ],
                        [
                            "eid130",
                            "left",
                            500,
                            500,
                            "swing",
                            "${arm-12}",
                            '98px',
                            '46px'
                        ],
                        [
                            "eid43",
                            "left",
                            0,
                            90,
                            "swing",
                            "${leg-12}",
                            '98px',
                            '103px'
                        ],
                        [
                            "eid49",
                            "left",
                            90,
                            160,
                            "swing",
                            "${leg-12}",
                            '103px',
                            '86px'
                        ],
                        [
                            "eid53",
                            "left",
                            250,
                            250,
                            "swing",
                            "${leg-12}",
                            '86px',
                            '55px'
                        ],
                        [
                            "eid101",
                            "left",
                            500,
                            250,
                            "swing",
                            "${leg-12}",
                            '55px',
                            '86px'
                        ],
                        [
                            "eid100",
                            "left",
                            750,
                            160,
                            "swing",
                            "${leg-12}",
                            '86px',
                            '103px'
                        ],
                        [
                            "eid99",
                            "left",
                            910,
                            90,
                            "swing",
                            "${leg-12}",
                            '103px',
                            '98px'
                        ],
                        [
                            "eid147",
                            "clip",
                            0,
                            50,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,224.9049072265625],
                            [0,353,315.60992431640625,271.84136962890625],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid146",
                            "clip",
                            50,
                            40,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,271.84136962890625],
                            [0,353,315.60992431640625,276.7316589355469],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid150",
                            "clip",
                            90,
                            40,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,276.7316589355469],
                            [0,353,315.60992431640625,299.4037170410156],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid151",
                            "clip",
                            130,
                            70,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,299.4037170410156],
                            [0,353,315.60992431640625,254.9141387939453],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid152",
                            "clip",
                            200,
                            50,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,254.9141387939453],
                            [0,353,315.60992431640625,219.62850952148438],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid153",
                            "clip",
                            250,
                            80,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,219.62850952148438],
                            [0,353,315.60992431640625,213.68399047851562],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid162",
                            "clip",
                            330,
                            90,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,213.68399047851562],
                            [0,353,315.60992431640625,200.33277893066406],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid164",
                            "clip",
                            420,
                            80,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,200.33277893066406],
                            [0,353,315.60992431640625,212.34254455566406],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid165",
                            "clip",
                            500,
                            40,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,212.34254455566406],
                            [0,353,315.60992431640625,218.07760620117188],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid168",
                            "clip",
                            540,
                            65,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,218.07760620117188],
                            [0,353,315.60992431640625,251.97972106933594],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid154",
                            "clip",
                            605,
                            45,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,251.97972106933594],
                            [0,353,315.60992431640625,294.22406005859375],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid156",
                            "clip",
                            650,
                            100,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,294.22406005859375],
                            [0,353,315.60992431640625,273.70648193359375],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid158",
                            "clip",
                            750,
                            40,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,273.70648193359375],
                            [0,353,315.60992431640625,259.7266540527344],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid159",
                            "clip",
                            790,
                            120,
                            "swing",
                            "${arm-22}",
                            [0,353,315.60992431640625,259.7266540527344],
                            [0,353,315.60992431640625,237.91343688964844],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid119",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${arm-12}",
                            '-167deg',
                            '0deg'
                        ],
                        [
                            "eid131",
                            "rotateZ",
                            500,
                            500,
                            "swing",
                            "${arm-12}",
                            '0deg',
                            '-167deg'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            250,
                            "swing",
                            "${leg-22}",
                            '15px',
                            '33px'
                        ],
                        [
                            "eid55",
                            "top",
                            250,
                            250,
                            "swing",
                            "${leg-22}",
                            '33px',
                            '77px'
                        ],
                        [
                            "eid86",
                            "top",
                            500,
                            250,
                            "swing",
                            "${leg-22}",
                            '77px',
                            '33px'
                        ],
                        [
                            "eid85",
                            "top",
                            750,
                            250,
                            "swing",
                            "${leg-22}",
                            '33px',
                            '15px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            90,
                            "swing",
                            "${leg-12}",
                            '15px',
                            '7px'
                        ],
                        [
                            "eid50",
                            "top",
                            90,
                            160,
                            "swing",
                            "${leg-12}",
                            '7px',
                            '15px'
                        ],
                        [
                            "eid54",
                            "top",
                            250,
                            250,
                            "swing",
                            "${leg-12}",
                            '15px',
                            '40px'
                        ],
                        [
                            "eid98",
                            "top",
                            500,
                            250,
                            "swing",
                            "${leg-12}",
                            '40px',
                            '15px'
                        ],
                        [
                            "eid97",
                            "top",
                            750,
                            160,
                            "swing",
                            "${leg-12}",
                            '15px',
                            '7px'
                        ],
                        [
                            "eid96",
                            "top",
                            910,
                            90,
                            "swing",
                            "${leg-12}",
                            '7px',
                            '15px'
                        ],
                        [
                            "eid148",
                            "clip",
                            0,
                            50,
                            "swing",
                            "${arm-12}",
                            [0,82.82796478271484,355,0],
                            [0,53.74724197387695,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid145",
                            "clip",
                            50,
                            40,
                            "swing",
                            "${arm-12}",
                            [0,53.74724197387695,355,0],
                            [0,24.805862426757812,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid149",
                            "clip",
                            90,
                            160,
                            "swing",
                            "${arm-12}",
                            [0,24.805862426757812,355,0],
                            [0,74.82167053222656,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid155",
                            "clip",
                            250,
                            80,
                            "swing",
                            "${arm-12}",
                            [0,74.82167053222656,355,0],
                            [0,80.40869903564453,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid161",
                            "clip",
                            330,
                            90,
                            "swing",
                            "${arm-12}",
                            [0,80.40869903564453,355,0],
                            [0,85.1446533203125,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid163",
                            "clip",
                            420,
                            80,
                            "swing",
                            "${arm-12}",
                            [0,85.1446533203125,355,0],
                            [0,83.99039459228516,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid166",
                            "clip",
                            500,
                            40,
                            "swing",
                            "${arm-12}",
                            [0,83.99039459228516,355,0],
                            [0,85.39002990722656,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid167",
                            "clip",
                            540,
                            150,
                            "swing",
                            "${arm-12}",
                            [0,85.39002990722656,355,0],
                            [0,33.333641052246094,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid157",
                            "clip",
                            690,
                            100,
                            "swing",
                            "${arm-12}",
                            [0,33.333641052246094,355,0],
                            [0,46.48796463012695,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid160",
                            "clip",
                            790,
                            50,
                            "swing",
                            "${arm-12}",
                            [0,46.48796463012695,355,0],
                            [3.736382007598877,57.7187385559082,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid169",
                            "clip",
                            840,
                            70,
                            "swing",
                            "${arm-12}",
                            [3.736382007598877,57.7187385559082,355,0],
                            [0,78.43058013916016,355,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid117",
                            "top",
                            0,
                            500,
                            "swing",
                            "${arm-12}",
                            '-47px',
                            '15px'
                        ],
                        [
                            "eid129",
                            "top",
                            500,
                            500,
                            "swing",
                            "${arm-12}",
                            '15px',
                            '-47px'
                        ],
                        [
                            "eid113",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${arm-22}",
                            '182deg',
                            '0deg'
                        ],
                        [
                            "eid125",
                            "rotateZ",
                            500,
                            500,
                            "swing",
                            "${arm-22}",
                            '0deg',
                            '182deg'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${leg-22}",
                            '0deg',
                            '103deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            500,
                            500,
                            "swing",
                            "${leg-22}",
                            '103deg',
                            '0deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            0,
                            500,
                            "swing",
                            "${leg-12}",
                            '0deg',
                            '-99deg'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            500,
                            500,
                            "swing",
                            "${leg-12}",
                            '-99deg',
                            '0deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("runningmananimate_edgeActions.js");
})("runner");
