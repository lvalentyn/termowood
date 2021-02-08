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