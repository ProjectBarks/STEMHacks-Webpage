define(['jquery'], function() {
    function open() {
        var args = [];
        Array.prototype.push.apply(args, arguments);
        return function() {
            if (args < 2) {
                return;
            }
            $('.button-' + args[0]).click(function () {
                args.shift();
                window.open.call(window, args[0], args[1], args[2]);
            })
        };
    }
    return {
        initFacebook: open('facebook', 'https://www.facebook.com/stemhacks', '_blank'),
        initTwitter: open('twitter', "https://twitter.com/intent/follow?screen_name=STEMHacks",
                    '1420336046988',
                    'width=500, height=700, toolbar=0, menubar=0, location=0, status=1, scrollbars=1, resizable=1,' +
                    'left=0,top=0'),
        initGithub: open('github', 'https://github.com/stemhacks', '_blank'),
        initEmail: open('email', 'mailto:contact@stemhacks.com')
    };
});