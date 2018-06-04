(function(){
    $('.jsRegBtn').on('click', function (e) {
        e.preventDefault();
        var offset = $(window).width() > 991 ? 10 : 60;
        console.log(offset);
        $('html,body').animate({
                scrollTop: $('.jsRegInput').offset().top-offset
            },
            200
            ,function () {
                $('.jsRegInput').focus();
            }
        );
    })
})();