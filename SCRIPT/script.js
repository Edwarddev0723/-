$(document).ready(function() {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
});

$(document).ready(function() {
    // 點擊登入按鈕時顯示彈出視窗
    $(".login-btn").click(function() {
        $("#login-modal").fadeIn();
    });

    // 點擊關閉按鈕時隱藏彈出視窗
    $(".close").click(function() {
        $("#login-modal").fadeOut();
    });

    // 點擊彈出視窗外部時隱藏彈出視窗
    $(window).click(function(event) {
        if (event.target == $("#login-modal")[0]) {
            $("#login-modal").fadeOut();
        }
    });
});

$(document).ready(function() {
    $('.farm-slider').slick({
        autoplay: true, // 啟用自動播放
        autoplaySpeed: 3000, // 每3秒切換一次
        infinite: true, // 無限循環播放
        slidesToShow: 3, // 一次顯示3個農場
        slidesToScroll: 1, // 一次滑動1個農場
        arrows: false,
        dots: false, // 不顯示導航點
        responsive: [
            {
                breakpoint: 768, // 當視窗寬度小於768px時
                settings: {
                    slidesToShow: 2 // 一次顯示2個農場
                }
            },
            {
                breakpoint: 480, // 當視窗寬度小於480px時
                settings: {
                    slidesToShow: 1 // 一次顯示1個農場
                }
            }
        ]
    });
});

$(document).ready(function() {
    // 平滑滾動效果
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });
});