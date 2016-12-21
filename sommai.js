$(window).scroll(function () {
    var navber = $('.sticky-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) navber.addClass('fixed');
    else navber.removeClass('fixed');
});