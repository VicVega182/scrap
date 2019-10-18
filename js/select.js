$(document).ready(function() {

    $('.reg-item_car').on('click', function() {
        $('.reg-item').removeClass('reg-item_active');
        $(this).addClass('reg-item_active');
        $('.header-navbar').toggleClass('header-navbar_active');
        $('.select-car').addClass('select_active');

        $(document).mouseup(function (e) {
            var container = $(".select");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.select-car').removeClass('select_active');
                // $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
                // $('body').css('overflow', 'auto');
            }
        });

        $('.select-car').children('.select-list').children('.select-item').children('.select-item__link').on('click', function(e) {
            e.preventDefault();
            $('.reg-item_car').children('.reg-text').text( $(this).text() );
            $('.header-navbar').removeClass('header-navbar_active');
            $('.select-car').removeClass('select_active');
        });

    });

    $('.reg-item_model').on('click', function() {
        $('.reg-item').removeClass('reg-item_active');
        $(this).addClass('reg-item_active');
        $('.header-navbar').toggleClass('header-navbar_active');
        $('.select-model').addClass('select_active');

        $(document).mouseup(function (e) {
            var container = $(".select");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.select-model').removeClass('select_active');
                // $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
                // $('body').css('overflow', 'auto');
            }
        });

        $('.select-model').children('.select-list').children('.select-item').children('.select-item__link').on('click', function(e) {
            e.preventDefault();
            $('.reg-item_model').children('.reg-text').text( $(this).text() );
            $('.header-navbar').removeClass('header-navbar_active');
            $('.select-model').removeClass('select_active');
        });

    });

    $('.reg-item_year').on('click', function() {
        $('.reg-item').removeClass('reg-item_active');
        $(this).addClass('reg-item_active');
        $('.header-navbar').toggleClass('header-navbar_active');
        $('.select-year').addClass('select_active');

        $(document).mouseup(function (e) {
            var container = $(".select");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.select-year').removeClass('select_active');
                // $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
                // $('body').css('overflow', 'auto');
            }
        });

        $('.select-year').children('.select-list').children('.select-item').children('.select-item__link').on('click', function(e) {
            e.preventDefault();
            $('.reg-item_year').children('.reg-text').text( $(this).text() );
            $('.header-navbar').removeClass('header-navbar_active');
            $('.select-year').removeClass('select_active');
        });

    });

    $('.reg-item_engine').on('click', function() {
        $('.reg-item').removeClass('reg-item_active');
        $(this).addClass('reg-item_active');
        $('.header-navbar').toggleClass('header-navbar_active');
        $('.select-engine').addClass('select_active');

        $(document).mouseup(function (e) {
            var container = $(".select");
            if (container.has(e.target).length === 0){
                $('.header-navbar').removeClass('header-navbar_active');
                $('.select-engine').removeClass('select_active');
                // $('.header-navbar-wrapper').removeClass('header-navbar-wrapper_active');
                // $('body').css('overflow', 'auto');
            }
        });

        $('.select-engine').children('.select-list').children('.select-item').children('.select-item__link').on('click', function(e) {
            e.preventDefault();
            $('.reg-item_engine').children('.reg-text').text( $(this).text() );
            $('.header-navbar').removeClass('header-navbar_active');
            $('.select-engine').removeClass('select_active');
        });

    });

    $('.reg-input').on('focus', function() {
        $('.reg-item').removeClass('reg-item_active');
    });


    $('.reg-options').on('click', function() {
        $('.header-navbar').addClass('header-navbar_active');
        $('.modal-options').addClass('modal_active');

        $(document).mouseup(function (e) {
            var container = $(".modal");
            if (container.has(e.target).length === 0){
                $('.modal').removeClass('modal_active');
                $('.header-navbar').removeClass('header-navbar_active');
            }
        });
    });

    $('.modal-close').on('click', function() {
        $('.modal').removeClass('modal_active');
        $('.header-navbar').removeClass('header-navbar_active');
    });

    $('.reg-button').on('click', function() {
        $('.header-navbar').addClass('header-navbar_active');
        $('.modal-sms').addClass('modal_active');

        $(document).mouseup(function (e) {
            var container = $(".modal");
            if (container.has(e.target).length === 0){
                $('.modal').removeClass('modal_active');
                $('.header-navbar').removeClass('header-navbar_active');
            }
        });
    });

    $('.partners-button_reg').on('click', function() {
        $('.header-navbar').addClass('header-navbar_active');
        $('.modal-partners').addClass('modal_active');

        $(document).mouseup(function (e) {
            var container = $(".modal");
            if (container.has(e.target).length === 0){
                $('.modal').removeClass('modal_active');
                $('.header-navbar').removeClass('header-navbar_active');
            }
        });
    });

});