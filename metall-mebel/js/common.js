var windowWidth;
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
$('.slick-product').slick({
    dots: false,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});
$(document).on('click', 'footer nav .fa, .nav-categories .fa', function() {
    var parent = $(this).closest('li');
    parent.toggleClass('opened');
    if (parent.hasClass('opened'))
        parent.find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
    else
        parent.find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
}).on('click', '.back-to-top', function() {
    $('body,html').animate({scrollTop:0},500);
}).on('click', 'a.search', function(e) {
    e.preventDefault();
    $('.search-hidden').addClass('showed');
}).mouseup(function (e){
    var div = $(".search-hidden");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('showed');
    }
}).on('click', '.hamburger', function() {
    $(this).toggleClass('active');

    var parent = $(this).parents('.main-nav'),
        nav = parent.find('.mobile-nav'),
        heightHidden = nav.find('ul').outerHeight();
    nav.toggleClass('opened');
    nav.hasClass('opened') ? nav.css('height', heightHidden) : nav.css('height', 0);
});
$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }

    var boxesInWindow = inWindow(".product-params");

    boxesInWindow.find('.product-params-photo').each(function(i) {
        var img = $(this).find('img'),
            link = $(this);
        setInterval(function() {
            link.addClass('showed');
            img.addClass('avia_start_animation');
        }, 100*i);
    });
});
$(window).resize(function() {
    windowWidth = $(window).outerWidth();
    if (windowWidth > 767) {
        $('.hamburger').removeClass('active');
        $('.mn').removeAttr('style').removeClass('mobile-nav').removeClass('opened');

    }
    else {
        $('.mn').addClass('mobile-nav');
    }
}).trigger("resize");



function inWindow(s){
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var currentEls = $(s);
    var result = [];
    currentEls.each(function(){
        var el = $(this);
        var offset = el.offset();
        if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
            result.push(this);
    });
    return $(result);
}