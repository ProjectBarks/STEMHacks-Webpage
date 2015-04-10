require(['toastr', 'jquery'], function(toastr) {
    var input = $('#chat-input');
    input.find('*').css('height', '100%');

    input.submit(function (ev) {
        ev.preventDefault();
        $.ajax({
            type: "POST",
            crossDomain: true,
            dataType: 'json',
            url: "/chat/send",
            data: $(this).serialize(),
            error: function () {
                toastr.error("Failed to send message!")
            }
        });
        $(this).find("input, textarea").val("");
    });
});

require(['/_ah/channel/jsapi', 'toastr', 'jquery'], function (channel, toastr) {
        function error() {
            toastr.error("Chat-room error!");
        }
        function open() {
            toastr.info("Joined chat-room!");
        }
        function addMessage(msg) {
            $('#chat-box').append("<div class=\"list-group-item\"><p class=\"chat-message\"><strong>" + msg.name + ": </strong>" + msg.msg + "</p></div><div class=\"chat-separator\"></div>")
            var chatbox = document.getElementById("chat-box");
            chatbox.scrollTop = chatbox.scrollHeight;
        }
        $.ajax({
            type: "POST",
            crossDomain: true,
            dataType: 'json',
            url: "/chat/history",
            data: $(this).serialize(),
            success: function (response) {
                for (var i = response.length - 1; i >= 0; i--) {
                    addMessage(JSON.parse(response[i]));
                }
            }
        });
        function join (count) {
            count = typeof count !== 'undefined' ? count : 0;
            $.ajax({
                type: "POST",
                crossDomain: true,
                dataType: 'json',
                url: "/chat/join",
                success: function(response){
                    channel = new goog.appengine.Channel(response.token);
                    var socket = channel.open();
                    socket.onopen = open;
                    socket.onmessage = (function(msg) {addMessage(JSON.parse(msg.data))});
                    socket.onerror = error;
                    socket.onclose = join;
                },
                error: function () {
                    toastr.error("Failed to join chat-room!");
                    if (count <= 10) {
                        setTimeout(function () {
                            join(count + 1)
                        }, 2000)
                    }
                }
            });
        }
        join()
    }
);