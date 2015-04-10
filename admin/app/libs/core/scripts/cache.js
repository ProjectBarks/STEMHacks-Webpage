define([], function () {
    return {
        create: function(key,value,days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires=" + date.toGMTString();
            } else expires = "";
            document.cookie = key + "=" + value + expires;
        },
        read: function(key) {
            var nameEQ = key + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        remove: function (key) {
            this.create(key, "", -1)
        }
    };
});