

$(document).ready(function(){
    $('.subscribe-news .form input').focus(function(){
        $(this).addClass('addClass');
    });
    $('.subscribe-news .form input').blur(function(){
        $(this).removeClass('addClass');
    })
});// end ready function