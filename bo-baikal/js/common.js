$(document).on('click', '.hamburger', function() {
    $(this).toggleClass('active');
    $('header').find('nav').toggleClass('showed');
});

$('.reviews-slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        }
    ]
});
$('.main-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.main-images-nav'
});
$('.main-images-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-images',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '60px'
});
// $('.client-slick').slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
// $('.our-hospital-slick').slick({
//     dots: false,
//     prevArrow: false,
//     nextArrow: '<button class="slick-next btns">Следующее фото <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>',
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
// $('[data-fancybox="our-hospital"]').fancybox({
//     autoFocus: false,
//     backFocus: false,
//     buttons : [
//         'close'
//     ]
// });
// $(window).scroll(function() {
//     if($(this).scrollTop() > $('header').height()) {
//         $('.header-fixed').addClass('showed');
//     } else {
//         $('.header-fixed').removeClass('showed').removeClass('move');
//         $('.move').removeClass('move');
//         $('.hamburger').removeClass('ham-active');
//     }
// });