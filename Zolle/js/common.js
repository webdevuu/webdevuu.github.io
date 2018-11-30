var intervalShowingIcons;
$(function() {
    setTimeout(function() {
        $('.text-wrapper').addClass('animate');
    }, 300);
    $(document).on('click', '.icon-items', function() {
        var iconId = $(this).data('iconid');
        $('.blur').find('img').removeClass('selected');
        $('.blur').find('img[data-blurid='+iconId+']').addClass('selected');

        $('.preview-item[data-previewid='+iconId+']').find('.preview-item-container').find('img').removeClass('selected');
        $('.preview-item[data-previewid='+iconId+']').find('.preview-item-container').find('img:first').addClass('selected');
        $('.preview-item').removeClass('selected');
        $('.preview-item[data-previewid='+iconId+']').addClass('selected');

    }).on('click', 'button.next', function() {
        var parents = $(this).parents('.preview-item'),
            container = parents.find('.preview-item-container'),
            selected = container.find('img.selected');
        container.find('img').removeClass('selected');
        if (selected.next('img').length < 1) container.find('img:first').addClass('selected');
        else selected.next().addClass('selected');
    }).on('click', 'button.prev', function() {
        var parents = $(this).parents('.preview-item'),
            container = parents.find('.preview-item-container'),
            selected = container.find('img.selected');
        container.find('img').removeClass('selected');
        if (selected.prev('img').length < 1) container.find('img:last').addClass('selected');
        else selected.prev().addClass('selected');
    });

    $(document).on('click', '.icon-items', function() {
        var iconId = $(this).data('iconid');
        $('.blur').find('img').removeClass('selected');
        $('.blur').find('img[data-blurid='+iconId+']').addClass('selected');
        $('.preview-item').removeClass('selected');
        $('.preview-item[data-previewid='+iconId+']').addClass('selected');
    });

    $('.icon-items').hover(function () {
        var wrap = $(this);
        intervalShowingIcons = setInterval(function() {
            var cimg = wrap.find('img.showed');
            wrap.find('img').removeClass('showed');
            if (cimg.next('img').length < 1) wrap.find('img:first').addClass('showed');
            else cimg.next().addClass('showed');

        }, 1000);
    }, function () {
        clearInterval(intervalShowingIcons);
        $(this).find('img').removeClass('showed');
        $(this).find('img:first').addClass('showed');
    });
});