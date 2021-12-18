$(document).ready(function(){
    // navigation toggle
    $('.navbar-toggler-btn').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    // change navbar bg
    $(document).scroll(function(){
        var $nav = $('.navbar');
        $nav.toggleClass('change-on-scroll', $(this).scrollTop() > $nav.height());
    });

    // header slider
    $('.header-banner-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // courses slider
    $('.courses-content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // teachers slider
    $('.teachers-content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // clients slider
    $('.clients-content').slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

    // blogs slider
    $('.blogs-content').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});