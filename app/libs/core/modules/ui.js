define(['jquery-legacy'], function () {
    var sections = $("#pagepiling").children();
    var fab = $("#homefab");
    var nav = $("#navbar");
    var cIndex, cWidth, cHeight, cTop, cX, cY;
    return {
        loader: function() {
            var run = $('#runner-loading');
            var start = parseInt(run.css("left"));
            var sub = 0;
            var interval = setInterval(function () {
                sub += 10;
                if (sub > start) {
                    sub = -start;
                    run.addClass('notransition');
                } else {
                    run.removeClass('notransition');
                }
                run.css("left", start - sub);
            }, 50);
            $(window).load(function () {
                setTimeout(function() {
                    $('.loader').fadeOut('slow', function() {
                        clearInterval(interval);
                    });
                }, 1000)
            });
        },
        update: function (index) {
            if (index == 0) {
                nav.fadeOut()
            } else {
                nav.fadeIn();
            }
            if (cIndex != null) {
                sections.eq(cIndex).removeClass('currentsection')
            }
            if (index < sections.size() - 1) {
                sections.eq(index).addClass('currentsection');
                cIndex = index;
            } else {
                cIndex = null;
            }

        },
        fabCheck: function (resize) {
            resize = typeof resize !== 'undefined' ? resize : false;
            var section = sections.eq(cIndex);
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
        }
    }
});