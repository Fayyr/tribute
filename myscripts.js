$(function() {
    var nav = $(".navbar");
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll > 882) {
            nav.removeClass('navbar-light').addClass("navbar-dark bg-dark");
        } else if (scroll >300){
            nav.removeClass("navbar-dark bg-dark").addClass('navbar-light bg-light');
        }else{
            nav.removeClass("navbar-light bg-light").addClass('navbar-dark');

        }



    });
});