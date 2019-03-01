$(document).on('click', '.hamburger', function() {
    $('.main-nav').toggleClass('showed');
    $(this).toggleClass('active');
});
$('[data-fancybox="our-hospital"]').fancybox({
    autoFocus: false,
    backFocus: false,
    buttons : [
        'close'
    ]
});
$(".sticky-wrapper").stick_in_parent();
$(window).scroll(function() {
    // if($(this).scrollTop() > $('header').height()) {
    //     $('.header-fixed').addClass('showed');
    // } else {
    //     $('.header-fixed').removeClass('showed').removeClass('move');
    //     $('.move').removeClass('move');
    //     $('.hamburger').removeClass('ham-active');
    // }
});