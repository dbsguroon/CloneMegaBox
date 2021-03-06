(function ($) {
    //배너 이미지 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });

    //영화 차트 슬라이드
    var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        // autoplay: {
        //     delay: 5000,
        // },
        // // mousewheel: {
        // //     invert: true,
        // // },
        // // keyboard: {
        // //     enabled: true,
        // //     onlyInViewport: false,
        // // },
        breakpoints: {
            // when window width is >= 600px
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            // when window width is >= 960px
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //영화 차트 탭메뉴
    var movBtn = $(".movie_title>ul>li");
    var movCont = $(".movie_chart>div");
    movCont.hide().eq(0).show();
    movBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display", "none");
        movCont.eq(index).css("display", "block");
    });

    // 공지사항 탭메뉴
    var tabMenu = $(".notice");
    tabMenu.find("ul>li>ul").hide();
    tabMenu.find("li.active>ul").show();

    function tabList(e) {
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }

    tabMenu.find("ul>li>a").click(tabList).focus(tabList);


})(jQuery);