

/***************открытие меню и подменю content-basic__item***********/

var arrow = $('.content-basic__header span:last-child');
var caption = $('.content-basic__item ul li span');

arrow.click(function () {
    $(this).toggleClass('active');
    $(this).parent().parent().find('ul').toggleClass('open');
    $(this).parent().parent().toggleClass('active');
    $(this).parent().find('div').toggleClass('active');
});

caption.click(function () {
    var index = $(this).parent().index();
    $(this).parent().find('p').toggleClass('open');
    $('.content-basic__item ul li').eq(index-1).toggleClass('close');
});

/**********************************************************************/

/**************************navigation*********************************/

$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    if ($(window).width() < 991) {
        $('.header__item, .subscription, .content-header').toggleClass('open');
    }
});

if ($(window).width() >= 991) {
    $('.header__item').css('display', 'block');
    $('.content-header').removeClass('open');
}

/*************************************************************************/







