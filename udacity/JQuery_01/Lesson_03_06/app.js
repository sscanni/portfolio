//remove the button from the dom.
// and add success to the body.
$(document).ready(function(){
    $('#my-button').on('click', function() {
        $(this).remove();         // or  $( "#my-button" ).remove();
        $('body').addClass("success");
    });
});
