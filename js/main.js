// Slick bunner init

$('.bunner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 4500,
    customPaging: function(slider, i) {
        return '';
    }
});

// Equpment bottom slider init

$('.equipment__bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    adaptiveHeight: true,
    rows: 0,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
}).on('setPosition', function() {
    $(this).find('.equipment__item').height('auto');
    var slickTrack = $(this).find('.slick-track');
    var slickTrackHeight = $(slickTrack).height();
    $(this).find('.equipment__item').css('height', slickTrackHeight + 'px');
});


// Equpment partners slider init

$('.equipment__partners').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Cooperation slider init

$('.news__bottom-big').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



// Cooperation slider init

$('.cooperation__slider .slider__left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.cooperation__slider .slider__right',
    adaptiveHeight: true,
    arrows: false
});

$('.cooperation__slider .slider__right').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.cooperation__slider .slider__left',
    arrows: true,
    nextArrow: '<span class="coop-next-arrow"><svg width="32" height="32" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><path d="M11.3791 6.62679C11.102 6.62069 10.8299 6.70101 10.6007 6.8567C10.3714 7.01239 10.1963 7.23576 10.0998 7.49554C10.0033 7.75533 9.99009 8.0387 10.0621 8.30632C10.1341 8.57395 10.2877 8.81238 10.5015 8.98868L18.6604 15.9783L10.5015 22.9654C10.3536 23.0741 10.2297 23.2121 10.1376 23.3709C10.0455 23.5297 9.98724 23.7059 9.96638 23.8883C9.94551 24.0706 9.96253 24.2553 10.0164 24.4308C10.0702 24.6063 10.1597 24.7689 10.2792 24.9082C10.3988 25.0475 10.5458 25.1605 10.7111 25.2404C10.8764 25.3202 11.0564 25.3651 11.2398 25.3722C11.4232 25.3793 11.6061 25.3485 11.7771 25.2816C11.948 25.2147 12.1033 25.1132 12.2333 24.9835L21.5744 16.9913C21.7211 16.8661 21.8389 16.7107 21.9197 16.5356C22.0005 16.3605 22.0423 16.1699 22.0423 15.977C22.0423 15.7842 22.0005 15.5936 21.9197 15.4185C21.8389 15.2433 21.7211 15.0878 21.5744 14.9626L12.2333 6.96266C11.9973 6.75307 11.6946 6.63391 11.3791 6.62648V6.62679Z" fill="#C4C4C4"/></svg></span>',
    prevArrow: '<span class="coop-prev-arrow"><svg width="32" height="32" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><path d="M20.6209 25.3732C20.898 25.3793 21.1701 25.299 21.3993 25.1433C21.6286 24.9876 21.8037 24.7642 21.9002 24.5045C21.9967 24.2447 22.0099 23.9613 21.9379 23.6937C21.8659 23.4261 21.7123 23.1876 21.4985 23.0113L13.3396 16.0217L21.4985 9.03463C21.6464 8.92592 21.7703 8.7879 21.8624 8.62909C21.9545 8.47028 22.0128 8.29413 22.0336 8.11174C22.0545 7.92936 22.0375 7.74468 21.9836 7.56918C21.9298 7.39367 21.8403 7.23113 21.7208 7.09181C21.6012 6.9525 21.4542 6.83949 21.2889 6.75963C21.1236 6.67977 20.9436 6.63491 20.7602 6.62783C20.5768 6.62075 20.3939 6.65152 20.2229 6.71841C20.052 6.7853 19.8967 6.88677 19.7667 7.01646L10.4256 15.0087C10.2789 15.1339 10.1611 15.2893 10.0803 15.4644C9.99953 15.6395 9.95771 15.8301 9.95771 16.023C9.95771 16.2158 9.99953 16.4064 10.0803 16.5815C10.1611 16.7567 10.2789 16.9122 10.4256 17.0374L19.7667 25.0373C20.0027 25.2469 20.3054 25.3661 20.6209 25.3735L20.6209 25.3732Z" fill="#C4C4C4"/></svg></span>'
});