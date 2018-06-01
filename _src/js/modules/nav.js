(function(){
    $('.nav__burger').on('click', function (e) {
        e.preventDefault();
       $('body').toggleClass('nav_opened');
    });
})();