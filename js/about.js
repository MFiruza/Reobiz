$(document).ready(function () {
  let counters = $(".counter");
  let countersQuantity = counters.length;
  let counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  let count = function (start, value, id) {
    let localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(10, counter[j], j);
  }
  

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll:6 ,
                infinite: true,
                dots: true
            }

        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 6
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
});