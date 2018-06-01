(function($){
    function Slider(base, options) {
        var Obj = this;
        var Flag = true;

        //default settings
        var settings = $.extend({
            btnPrevClass: '.jsSliderPrev',
            btnNextClass: '.jsSliderNext',
            listClass: '.jsSliderList',
            speed: 100
        }, options || {});

        // elements
        var $Base = $(base),
            $BtnPrev = $Base.find(settings.btnPrevClass),
            $BtnNext = $Base.find(settings.btnNextClass),
            $List = $Base.find(settings.listClass);

        // Private methods
        var init = function(){
            // nav buttons
            $BtnPrev.on('click', showPrev);
            $BtnNext.on('click', showNext);
        };
        var getStepSize = function(){
            return $List.children().eq(0).outerWidth();
        };
        var showPrev = function(e){
            e.preventDefault();
            if(!Flag)return;
            Flag = false;
            var step = getStepSize();
            var $lastItem = $List.children().last();
            $lastItem.prependTo($List);
            $List.css({left: - step});
            $List.animate({
                left: 0
            }, settings.speed*step/100, function () {
                Flag = true;
            });
        };
        var showNext = function(e){
            e.preventDefault();
            if(!Flag)return;
            Flag = false;
            var step = getStepSize();
            var $firstItem = $List.children().first();
            $List.animate({
                left: - step
            }, settings.speed*step/100, function () {
                $firstItem.appendTo($List);
                $List.css({left: 0});
                Flag = true;
            });
        };

        //initialization
        init();
    }


    $.fn.slider = function(options){
        return this.each(function(){
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('slider')) return;

            // pass options to plugin constructor
            var slider = new Slider(this, options);

            // Store plugin object in this element's data
            element.data('slider', slider);
        });
    };
})(jQuery);