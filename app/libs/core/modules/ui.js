define(['jquery' +
''], function () {
    var sections = $("#pagepiling").children();
    var fab = $("#homefab");
    var nav = $("#navbar");
    var cIndex, cWidth, cHeight, cTop, cX, cY, cRegister = true;
    return {
        init: function() {
            $(document).ready(function () {
                $(this).find('.caption').slideUp(250);
            });

            $('.profile').hover(
                function() {
                    $(this).find('.caption').slideDown(250);
                },
                function() {
                    $(this).find('.caption').slideUp(250);
                }
            );

            nav_size = function() {
                $(".nav-spacer").css("padding-top", $("#navbar").outerHeight());
            };

            nav_size();
            $(window).resize(nav_size);
        },
        loader: function() {
            var run = $('#runner-loading');
            var start = parseInt(run.css("left"));
            var sub = 0;
            var mover = setInterval(function () {
                sub += 10;
                if (sub > start) {
                    sub = -start;
                    run.addClass('notransition');
                } else {
                    run.removeClass('notransition');
                }
                run.css("left", start - sub);
            }, 50);
            $(window).load(function() {
                var loader = $('.loader');
                loader.fadeOut('slow', function() {
                    clearInterval(mover);
                    loader.remove();
                });
            })
        },
        update: function (index) {
            if (index == 0) {
                nav.removeClass('navbar-main');
                nav.find('.blackfnt').removeClass('blackfnt').addClass('whitefnt');
                if (cRegister) {
                    $('.nav-register').animate({width:'toggle'},350);
                    $('.nav-social').show();
                    cRegister = false;
                }
            } else {
                nav.addClass('navbar-main');
                nav.find('.whitefnt').removeClass('whitefnt').addClass('blackfnt');
                if (!cRegister) {
                    $('.nav-register').animate({width:'toggle'},350);
                    $('.nav-social').hide();
                    cRegister = true;
                }
            }
            if (cIndex != null) {
                sections.eq(cIndex).removeClass('currentsection animate-half')
            }
            if (index < sections.size() - 1) {
                sections.eq(index).addClass('currentsection animate-half');
                cIndex = index;
            } else {
                cIndex = null;
            }

        },
        fabCheck: function (resize) {
            resize = typeof resize !== 'undefined' ? resize : false;
            var section = sections.eq(cIndex);
            var fabCheck = setInterval(function () {
                if (section.position().top != cTop || section.width() != cWidth || section.height() != cHeight) {
                    if (section.position().top != cTop || section.height() != cHeight) {
                        cY = section.position().top + section.height() - fab.height();
                    }
                    if (section.width() != cWidth) {
                        cX = section.position().left + section.width();
                        if (cIndex == 0) {
                            cX /= 2;
                        } else {
                            cX *= .9;
                        }
                        cX -= fab.width();
                    }
                    if (resize) {
                        fab.addClass('notransition')
                    } else {
                        fab.removeClass('notransition');
                    }
                    fab.css({left: cX, top: cY});
                }
            }, 10);
            setTimeout(function () {
                clearInterval(fabCheck);
            }, 500)
        }
    }
});