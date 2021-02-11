/* Jquery */
$(document).ready(function () {
    // burger 
    const brg = document.querySelector('.burger');
    $('.burger').click(function () {
        $('.burger, .navbar__center').toggleClass('active');
    });
    // $('.burger, .navbar__center').click(function () {
    //     $('.burger, .navbar__center').removeClass('active');
    // });
    // navmenu on scroll
    $(window).scroll(function () {
        if (this.scrollY > 40) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    // slick-sliders
    $('.infoblock__slider').slick({
        slidesToShow: 1,
        infinite: true,
        dots: false,
        arrows: true,
        speed: 2000,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        prevArrow: '<button type="button" class="my-slick-prev"></button>',
        nextArrow: '<button type="button" class="my-slick-next"></button>'
    });
    $('.companies__slider').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        infinite: true,
        dots: false,
        arrows: true,
        speed: 2000,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="my-slick-prev"></button>',
        nextArrow: '<button type="button" class="my-slick-next"></button>',
    });
    $('.warranty__slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        speed: 2000,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="my-slick-prev"></button>',
        nextArrow: '<button type="button" class="my-slick-next"></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 100,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.reviews__slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        speed: 2000,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        fade: true,
        prevArrow: '<button type="button" class="my-slick-prev"></button>',
        nextArrow: '<button type="button" class="my-slick-next"></button>',
    });
    // tabs
    $('.infoblock__tab').on('click', function () {
        let thisTabIndex = $(this).attr('data-tab'),
            tabContainer = $(this).parent().siblings('.infoblock__text'),
            thisTabContainer = tabContainer.find(`.infoblock__descr[data-tab='${thisTabIndex}']`);

        $(this)
            .addClass('active')
            .siblings().removeClass('active');

        thisTabContainer
            .addClass('active')
            .siblings().removeClass('active');
    });
    // маска телефон
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+38(999) 999-99-99');
    im.mask(inputs);
    // плавная прокрутка
    $("a[href]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});