

/****************анимация при скролле**********************************************************/

( () => {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let element = entry.target;
                element.classList.add('active');
            }else {
                let element = entry.target;
                element.classList.remove('active');
            }
        });
    }, options);

    let arr = document.querySelectorAll(".card, .content-header, .format");
    arr.forEach((i) => {
        observer.observe(i);
    });
})();

/**************************************************************************/


/************************плавная прокрутка якорей***************************/

 function scrollNav() {
 $('a[href*="#"]').click(function(){
 $('html, body').stop().animate({
 scrollTop: $( $(this).attr('href') ).offset().top - 250
 }, 800);
 return false;
 });
 }
 scrollNav();

/****************************************************************************/


/****************************плавная прокрутка вверх**************************/

$('body').append('<a href="#" class="go-top" title="Up"></a>');
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $(".go-top").scrollToTop();
});

/********************************************************************************/


/*****************animation gelik*************************************************/

$(window).scroll(function () {

    function is_fully_shown(target) {
        var windowScrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var targetHeight = $(target).height();
        var targetOffsetTop = $(target).offset().top;

        if (targetOffsetTop >= windowScrollTop && targetOffsetTop + targetHeight <= windowHeight + windowScrollTop){
            return true;
        } else {
            return false;
        }
    }

    if (is_fully_shown($('.gelik'))) {
        $('.gelik').addClass('active');
    }else {
        $('.gelik').removeClass('active');
    }
});

/***************************************************************************/
