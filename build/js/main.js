window.addEventListener('DOMContentLoaded', () => {
    /* Jquery */
    $(document).ready(function () {
        // navmenu on scroll
        $(window).scroll(function () {
            if (this.scrollY > 40) {
                $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky');
            }
        });
        $('.infoblock__slider').slick({
            slidesToShow: 1,
            infinite: true,
            dots: false,
            arrows: true,
            speed: 2000,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<button type="button" class="my-slick-prev"></button>',
            nextArrow: '<button type="button" class="my-slick-next"></button>'
        });
    });
});


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