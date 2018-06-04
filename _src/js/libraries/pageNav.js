(function($){
    function Navigation(list, options) {
        var Obj = this;
        var Flag = true;

        //default settings
        var settings = $.extend({
            speed: 300,
            tglBtn: '.nav__burger',
            anchor: '.anchor',
            navLink: 'a[data-name]',
            body: 'body',
            openClass: 'nav_opened'
        }, options || {});

        // elements
        var $List = $(list),
            $Links = $(settings.navLink),
            $Body = $(settings.body),
            $Anchors = $(settings.anchor),
            $Window = $(window);

        // Private methods
        var init = function(){
            $(settings.tglBtn).on('click', onToggleClick);
            $Links.on('click', onNavClick);
            $Window.on('scroll', onWindowScroll);
        };
        var onToggleClick = function(e){
            e.preventDefault();
            $Body.toggleClass(settings.openClass);
        };
        var onNavClick = function(e){
            e.preventDefault();
            var top = $Anchors.filter('[name='+ $(this).attr('data-name') +']').offset().top;
            $('html,body').animate({
                scrollTop: top
            },
            settings.speed
            );
        };
        var onWindowScroll = function(){
            var winTop = $Window.scrollTop();

            $Anchors.each(function () {
                var $self = $(this),
                    selfTop = $self.offset().top;

                if(selfTop <= winTop){
                    updateActive($self.attr('name'))
                }
            });
        };
        var updateActive = function(name){
            $Links
                .parent()
                .removeClass('active')
                .end()
                .filter('[data-name='+name+']')
                .parent()
                .addClass('active');
        };

        //initialization
        init();
    }


    $.fn.pageNav = function(options){
        return this.each(function(){
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('pageNav')) return;

            // pass options to plugin constructor
            var pageNav = new Navigation(this, options);

            // Store plugin object in this element's data
            element.data('pageNav', pageNav);
        });
    };
})(jQuery);