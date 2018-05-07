var windowWidth;
$(function () {
    $(document).on('click', '.toggle-notice', function(e) {
        e.preventDefault();
        var parent = $(this).parents('.item-notice'),
            heightHiddenText = parent.find('.text-notice > div').outerHeight();
        $(this).parents('.item-notice').toggleClass('opened');
        parent.hasClass('opened') ? parent.find('.text-notice').css('height', heightHiddenText) : parent.find('.text-notice').css('height', 0);
    }).on('click', '.item-list .title', function() {
        if (windowWidth > 767) return false;
        var parent = $(this).parents('.item-list'),
            heightHiddenText = parent.find('.list-wrapper > div').outerHeight();
        parent.toggleClass('showed');
        parent.hasClass('showed') ? parent.find('.list-wrapper').css('height', heightHiddenText) : parent.find('.list-wrapper').css('height', 0);
    }).on('click', '.hamburger', function() {
        $(this).toggleClass('active');
        $('header .header-nav nav').toggleClass('showed');
        $('body').toggleClass('overflow-hidden');
    });;


});
$(window).resize(function() {
    windowWidth = $(window).outerWidth();
    $('.item-notice').each(function () {
        var heightHiddenText = $(this).find('.text-notice > div').outerHeight();
        $(this).hasClass('opened') ? $(this).find('.text-notice').css('height', heightHiddenText) : $(this).find('.text-notice').css('height', 0);
    });
}).trigger("resize");
$('.news-slick').slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
});
