$(document).ready(function() {
    $('.lots-current').on('click', function(e) {
        e.preventDefault();
        $('.lots-block-market').addClass('lots-block-market_active');
        $('.lots-block-my').removeClass('lots-block-my_active');
    });

    $('.lots-my').on('click', function(e) {
        e.preventDefault();
        $('.lots-block-market').removeClass('lots-block-market_active');
        $('.lots-block-my').addClass('lots-block-my_active');
    });

    $('.lots-links__link').on('click', function() {
       $('.lots-links__link').removeClass('lots-links__link_active');
       $(this).addClass('lots-links__link_active');     
    });

    $('.win-button_accept').on('click', function() {
        $('.win-pay-wrapper').css('display', 'flex');
    });

    $('.win-pay__icon').on('click', function() {
        $('.win-pay-wrapper').css('display', 'none');
    });

    $('.win-pay__balance').on('click', function() {
        $('.win-disclaimer').css('display', 'none');
        $('.win-buttons').css('display', 'none');
        $('.win-connect').css('display', 'block');
        $('.win-pay-wrapper').css('display', 'none');
    });

    $('.partners-link').on('click', function() {
        $('.partners-link').removeClass('partners-link_active');
        $(this).addClass('partners-link_active');
    });

    $('.partners-link__reg').on('click', function() {
        $('.partners-block_enter').css('display', 'none');
        $('.partners-block_reg').css('display', 'block');
    });

    $('.partners-link__enter').on('click', function() {
        $('.partners-block_enter').css('display', 'flex');
        $('.partners-block_reg').css('display', 'none');
    });


    $('.checkbox-label').on('click', function() {
        if( !$(this).prev().is(':checked') ) {
            $(this).addClass('checkbox-label_active');
        } else {
            $(this).removeClass('checkbox-label_active');
        }
    });


    $('img.img-icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
          }
          $img.replaceWith($svg);
        }, 'xml');
    });

    var num = $('.wrapper').width() / 2;

    // $(window).resize(function() {
    //     $('.policy-arrow').css({
    //         "transform": 'translateX(' + num + 'px)'
    //     });
    // });
    $('.policy-arrow').css({
        "transform": 'translateX(' + num + 'px)'
    });

    
});

