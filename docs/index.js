$(function(){

    $('#btn').click(function(){
        $('header').addClass('hide');
        $('main').removeClass('hide');
    });

    $('.alertBox').click(function() {

        var $detail = $(this).find('.detail');

        if($detail.hasClass('show')) { 
        $detail.removeClass('show');
        $detail.slideUp();
        $(this).find('span').text('+');
        } else {
        $detail.addClass('show'); 
        $detail.slideDown();
        $(this).find('span').text('-');
        }

    });

    $('.breath').hide();

    $(window).scroll(function(){
        $('.pos').text($(this).scrollTop());
        if ($(this).scrollTop() > 500){
            $('.breath').fadeIn();
        }else{
            $('.breath').hide();
        }

        if($(this).scrollTop() == 2716){
            $('.gameOverWrap').removeClass('hide');
            $('main').addClass('hide');
        }


    });

    $('.breath').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });

    $('.reset').click(function(){
        $('.gameOverWrap').addClass('hide');
        $('header').removeClass('hide');
    });

});


var window_default_w = jQuery(window).width();
var breakpoint = 767;
if(window_default_w<breakpoint){
    $(window).scroll(function(){
	    if($(window).scrollTop() > 1744){
               $('.gameOverWrap').removeClass('hide');
               $('main').addClass('hide');
           }
    });
}

var window_default_w = jQuery(window).width();
var breakpoint = 569;
if(window_default_w<breakpoint){
    $(window).scroll(function(){
	    if($(window).scrollTop() > 1737){
               $('.gameOverWrap').removeClass('hide');
               $('main').addClass('hide');
           }
    });
}

