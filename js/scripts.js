// Button toTop

$(function() {

    $(window).scroll(function() {

        if ($(this).scrollTop() != 0) {

            $('#idTop').fadeIn();

        } else {

            $('#idTop').fadeOut();

        }

    });

    $('#idTop').click(function() {

        $('body,html').animate({ scrollTop: 0 }, 600);

    });

});

// End of button toTop

// Button toBottom

$(document).ready(function() {
    //fade in/out based on scrollTop value
    //setTimeout("$('#idBottom').hide();",7000 );
    $(window).scroll(function() {
        if ($(this).scrollTop() < 500) {
            $('#idBottom').fadeIn();
        } else {
            $('#idBottom').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#idBottom').click(function() {
        $('body,html').animate({
            scrollTop: 5000
        }, 800);
        return false;
    });
});

// End of button toBottom



