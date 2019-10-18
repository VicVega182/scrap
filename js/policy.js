$(document).ready(function() {
    // наведение на стрелку
    $('.policy-arrow').on('mouseover', function() {
        $(this).addClass('policy-arrow_active');
    });

    // потеря фокуса стрелки
    $('.policy-arrow').on('mouseleave', function() {
        $(this).removeClass('policy-arrow_active');
    });

    // появление стрелки
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.policy-arrow').removeClass('policy-arrow_height');
            $('.policy-arrow').css('display', 'flex');
        } else {
            $('.policy-arrow').addClass('policy-arrow_height');
            $('.policy-arrow').css('display', 'flex');
        }
    });

    // скролл вверх страницы
    $('.policy-arrow').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    });
});