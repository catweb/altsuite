(function () {
    var $base = $('.how__slider');
    var $items = $base.find('.how__slider__item');
    var $tabs = $base.find('.how__slider__control');
    var onTabClick = function(e){
        e.preventDefault();
        var index = $(this).index();
        $items
            .removeClass('active')
            .eq(index)
            .addClass('active');
        $tabs
            .removeClass('active')
            .eq(index)
            .addClass('active');
    };

    $tabs.on('click', onTabClick);
})();