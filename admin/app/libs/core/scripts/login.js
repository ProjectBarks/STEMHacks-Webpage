/**
 * Created by brandon on 2/19/15.
 */

require(['core/scripts/cache', 'toastr', 'jquery'], function (cache, toastr) {
        $(document).ready(function () {
            $('#loader').fadeOut(250);
        });
        $('#form-signin').submit(function(ev) {
            ev.preventDefault();
            $.ajax({
                type: "POST",
                crossDomain: true,
                dataType: 'json',
                url: "/account/login",
                data: $('#form-signin').serialize(),
                success:function(response){
                    cache.create('account', response.cookie, 1);
                    window.location.reload(false);
                },
                statusCode: {
                    401: function() {
                        toastr.error("Invalid Credentials");
                    }
                },
                error: function (s) {
                    toastr.error("Error");
                }
            });
        });
    }
);