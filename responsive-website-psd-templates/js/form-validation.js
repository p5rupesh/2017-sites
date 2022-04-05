$.fn.checkEmpty = function (inputText) {


    $(inputText).on({
        blur: function () {
            var fieldName = $(this).siblings("label").text();
            if ($(this).val() == "") {
                $(this)
                    .addClass("invalid")
                    .removeClass("valid label-effect");

                $(this).siblings("span.error-msg")
                    .css("opacity", "1")
                    .text("Please Enter " + fieldName);
            } else {
                $(this)
                    .removeClass("invalid")
                    .addClass("valid label-effect");

                $(this).siblings("span.error-msg")
                    .css("opacity", "0")
                    .text("");

            }
        },
        focus: function () {
            $(this).removeClass("invalid");
            if ($(this).val() == "") {
                $(this).removeClass("label-effect");
                $(this).siblings("span.error-msg")
                    .css("opacity", "0");
            } else {
                $(this).addClass("label-effect");
            }
        }
    });
}

$.fn.validate = function (formId) {

    $(formId).find("input[type='text'],input[type='password'],textarea").each(function () {
        console.log($(this).attr("id"));
        $.fn.checkEmpty($(this));
    });

}

$(document).ready(function () {
    $.fn.validate("#form-1");
});
