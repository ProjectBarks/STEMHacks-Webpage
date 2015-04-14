/**
 * Created by brandon on 2/19/15.
 */
var serialized_cache = "";
require(['toastr', 'jquery'], function (toastr) {
        $(document).ready(function () {
            $.ajax({
                type: "POST",
                crossDomain: true,
                dataType: 'json',
                url: "/email/types",
                success:function(response){
                    var type = $("#email_type");
                    for (var i = 0; i < response.length; i++) {
                        type.append("<option>" + response[i] + "</option>");
                    }
                },
                error: function (request, status, error) {
                    $("#email_type").append("<option>Error</option>");
                    toastr.error("Failed to load types!");
                }
            });

        });
        $('#email_reset_button').click(function() {
            $("#email_preview").html("");
        });
        $('#email_buttons').click(function() {
            var form = $('#email_form');
            $.ajax({
                type: "POST",
                crossDomain: true,
                dataType: 'json',
                url: "/email/send",
                data: form.serialize(),
                success:function(response){
                    if (response.result != "complete") {
                        toastr.warning("Error: " + response.result);
                        return;
                    }
                    toastr.success("Email Sent!");
                },
                error: function (request, status) {
                    toastr.error("Error Code: " + status);
                    console.log(request.responseText);
                }
            });
            $("#email_preview").html("");
            form.find("input, textarea").val("");
        });
        $('#email_form').change(function() {
            var serialized = $(this).serialize();
            if (serialized_cache == serialized) {
                return;
            }
            serialized_cache = serialized;
            $.ajax({
                type: "POST",
                crossDomain: true,
                dataType: 'json',
                url: "/email/generate",
                data: serialized,
                success: function(response){
                    var result = response.email.split("\n");
                    var preview = $("#email_preview");
                    preview.html("");
                    for (var i = 0; i < result.length; i++) {
                        preview.append("<p>" + result[i] + "</p>");
                    }
                },
                error: function () {
                    var preview = $("#email_preview");
                    preview.html("");
                    preview.append("<p>Error<p>");
                }
            });
        });
    }
);