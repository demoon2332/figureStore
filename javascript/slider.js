// $(document).ready(function () {
//     $(".image-slider").slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       infinite: true,
//       arrows: true,
//       draggable: false,
//       prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
//       nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
//       dots: true,
//       responsive: [
//         {
//           breakpoint: 1025,
//           settings: {
//             slidesToShow: 3,
//             centerMode: true,
//             centerPadding: '30px',
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             centerMode: true,
//             centerPadding: '30px',
//             arrows: false,
//             infinite: false,
//           },
//         },
//       ],
//       // autoplay: true,
//       // autoplaySpeed: 1000,
//     });
//   });

var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');  
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');  
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),  
  prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 1000,
  arrows: false,
  dots: false,
  focusOnSelect: true,
//   prevArrow: '<button> prev</button>',
//   nextArrow: '<button> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 6,
  slidesToShow: 5,
  slidesToScroll: 3,
  centerPadding: '0',
  centerMode: true,
  centerPadding: '40px',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  /*infinite: false,*/
});