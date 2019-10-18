$(document).ready(function() {
    
    $('.header-menu').on('click', function(e) {
        e.preventDefault();
        $('.header-navbar').toggleClass('header-navbar_active');
        $('.header-navbar-wrapper').toggleClass('header-navbar-wrapper_active');
        $('body').css('overflow', 'hidden');

        if( $('.header-navbar').hasClass('header-navbar_active') ) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }

        $(document).mouseup(function (e) {
            var container = $(".header-navbar-wrapper");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
                $('body').css('overflow', 'auto');
            }
        });

    });

    $('.header-menu-burger').on('click', function(e) {
        e.preventDefault();
        $('.header-navbar').removeClass('header-navbar_active');
        $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
        $('body').css('overflow', 'hidden');

        if( $('.header-navbar').hasClass('header-navbar_active') ) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });



    $('.header-select__link').on('click', function(e) {
        e.preventDefault();
        $('.header-navbar').addClass('header-navbar_active');
        $('.header-search').addClass('header-search_active');
        // $('body').css('overflow', 'hidden');
        $(".header-select-item").on('click', function() {

            if($(window).width() > 768) {
                $('.header-select__link').text($(this).text());
                $('.header-search').removeClass('header-search_active');
                $('.header-navbar').removeClass('header-navbar_active');
                $('body').css('overflow', 'auto');
            } else {
                $('.header-select__link').text($(this).text());
                $('.header-search').removeClass('header-search_active');
                // $('.header-navbar').removeClass('header-navbar_active');
                $('body').css('overflow', 'auto');
            }

        }); 

        $(document).mouseup(function (e) {
            var container = $(".header-search_active");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.header-search').removeClass('header-search_active');
                $('body').css('overflow', 'auto');
            }
        });
    });

    $('.header-navbar-value').on('click', function() {
        $('.header-navbar-block').addClass('header-navbar-block_active');
        $('.header-navbar').addClass('header-navbar_active');

        $('.header-navbar-item').on('click', function(e) {
            e.preventDefault();
            $('.header-navbar__value').text( $(this).text() );
            $('.header-navbar-block').removeClass('header-navbar-block_active');
            $('.header-navbar-wrapper').addClass('header-navbar-wrapper_active');
            $('.header-navbar').addClass('header-navbar_active');
        });

        $(document).mouseup(function (e) {
            var container = $(".header-navbar-block_active");
            if (container.has(e.target).length === 0){
                $('.header-navbar-block').removeClass('header-navbar-block_active');
                $('body').css('overflow', 'auto');
            }
        });
    });

});