require(['core/scripts/cache', 'jquery'], function(cache) {
    window.page = window.location.hash || "#welcome";

    $(window).on("resize", function () {
        $("html, body").height($(window).height());
        $(".main, .menu").height($(window).height() - $(".header-panel").outerHeight());
        $(".pages").height($(window).height());
    }).trigger("resize");

    $(".menu li").click(function() {

        // Menu
        if (!$(this).data("target")) return;
        if ($(this).is(".active")) return;
        $(".menu li").not($(this)).removeClass("active");
        $(".page").not(page).removeClass("active").hide();
        window.page = $(this).data("target");
        var page = $(window.page);
        window.location.hash = window.page;
        $(this).addClass("active");

        page.show();

        var totop = setInterval(function() {
            $(".pages").animate({scrollTop:0}, 0);
        }, 1);

        setTimeout(function() {
            page.addClass("active");
            setTimeout(function() {
                clearInterval(totop);
            }, 1000);
        }, 100);
    });

    $(document).ready(function () {
        if (window.page != "#welcome") {
            $(".menu").find("li[data-target=" + window.page + "]").trigger("click");
        }
    });

    $('#logout').click(function() {
        $.ajax({
            type: "POST",
            crossDomain: true,
            dataType: 'json',
            url: "/account/logout",
            complete: function() {
                cache.remove("account");
                window.location.reload(false);
            }
        });
    });

    function chatboxSize() {
        $("#chat").css("height", $(document).height() * .80)
    }
    $(window).resize(function() {
        chatboxSize();
    });
    chatboxSize();

    $(document).ready(function () {
        $('#loader').fadeOut(250);
    });
});