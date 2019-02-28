$('.main-slick').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
});
$('.services-slick').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
});
$('.clients-slick').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000
});
//
// $(document).on('click', '.hamburger', function() {
//     $(this).toggleClass('active');
//     $('nav').toggleClass('showed');
//     $('body').toggleClass('opacity');
// }).on('click', function (e) {
//     var container = $("nav, .hamburger");
//     if (container.has(e.target).length === 0 && $('.hamburger').hasClass('active') && $('body').hasClass('opacity') && $('nav').hasClass('showed')){
//         clearElements()
//     }
// });
//
// var windowWidth;
// $(window).resize(function() {
//     windowWidth = $(window).outerWidth();
//     if (windowWidth > 767) {
//         clearElements()
//     }
// }).trigger('resize');
//
// function clearElements() {
//     $('.hamburger').removeClass('active');
//     $('nav').removeClass('showed');
//     $('body').removeClass('opacity');
// }