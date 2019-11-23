$(document).ready(function(){
    // $('.slider-box').slick({
    //     dots: true,
    //     // infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     // speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });
    $('.slider-box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});