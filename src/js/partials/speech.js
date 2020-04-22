/*******************speech************************************************************/

    var speech = $('.content-header__speech'),
        subscription = $('.subscription'),
        time = subscription.text().length * 40;

    $.fn.animate_Text = function() {
        var string = this.text();
        return this.each(function(){
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="new">$&</span>'));
            $this.find('span.new').each(function(i, el){
                setTimeout(function(){ $(el).addClass('div_opacity') }, 40 * i);
            });
        });
    };

    subscription.animate_Text().show();

    setTimeout(function () {
        speech.css('opacity', 1)
    }, time);

/*******************************************************************************/