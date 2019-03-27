$(document).ready(function(){
    $('.ts_nw_list:first-of-type').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false
    });

    $('.carousel_list').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: '<button type="button" class="snp cust-prev"><span></span></button>',
         nextArrow: '<button type="button" class="snp cust-next"><span></span></button>'
      });

      // $('.slider_stories_cont ul').slick({
      //      infinite: true,
      //      slidesToShow: 1,
      //      slidesToScroll: 1
      //   });

      $(function() {
    $('.slider_stories_cont ul').on('init', function(event, slick) {
      $(this).append('<div class="slick-counter"><span class="current"></span> of <span class="total"></span></div>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
    .slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: true
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    });
  });
});
