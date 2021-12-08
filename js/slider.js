$(document).ready(function () {

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,

        autoplay: false,
        infinite: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1186,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }

            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
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
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
        
      });
});
