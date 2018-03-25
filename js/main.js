$(document).ready(function () {

    $("#contact-form").validate({
        rules: {
            fullname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                maxlength: 8000
            }
        },

        messages: { // custom messages
            fullname: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email address"
            },
            message: {
                required: "enter your message",
                maxlength: jQuery.format("The maxlength for message is {0} !")
            },
        },

        submitHandler: function(form) {

            $text = $(".contact-me")
            $text.hide();

            $form = $(form);
            // $container = $form.parent();
            // w = $form.outerWidth();
            // h = $form.outerHeight();
            $form.hide();

            $('#msg_submitting').fadeIn(2000);
            $.ajax({
                type: "POST",
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function (data) {
                        $('#msg_submitting').hide();
                        if(data == 'success'){
                            $('#msg_submitted').fadeIn(1000);
                        }
                        else{
                            $('#errors').html(data).show();
                            $form.show();
                        }
                }
            });

            return false;

        }

    });

});
