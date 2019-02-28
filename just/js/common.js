$(document).on('click', '.tabs-map button', function() {
    var tab = $(this).data('tab');
    $('.tabs-map button').removeClass('btns-yellow');
    $(this).addClass('btns-yellow');
    $('.maps').removeClass('opacity-1');
    $('.maps[data-address='+tab+']').addClass('opacity-1');
});