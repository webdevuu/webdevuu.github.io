$('.slick-short').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});
$('.slick-full').slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});
$(document).on('click', '.hamburger', function() {
   $(this).toggleClass('active');

    var parent = $(this).parents('nav'),
        nav = parent.find('.nav'),
        heightHidden = parent.find('ul').outerHeight();
        nav.toggleClass('opened');
        nav.hasClass('opened') ? nav.css('height', heightHidden) : nav.css('height', 0);
});

function VK_Widget_Init(){
    var div = document.getElementsByClassName('vk-group');
    div[0].innerHTML = '<div id="vk_groups"></div>'
    VK.Widgets.Group("vk_groups", {mode: 3, width: "auto", height: "220",}, 20003922);
};
window.addEventListener('load', VK_Widget_Init, false);
window.addEventListener('resize', VK_Widget_Init, false);