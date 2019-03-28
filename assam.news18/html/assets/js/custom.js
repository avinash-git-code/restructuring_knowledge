$(document).ready(function(){
    $('.ts_nw_list:first-of-type').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false
    });

    $('.carousel_list').slick({
        autoplay:true,
        autoPlaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="snp cust-prev"><span></span></button>',
        nextArrow: '<button type="button" class="snp cust-next"><span></span></button>'
    });

    $(function() {
    $('.slider_stories_cont ul').on('init', function(event, slick) {
      $(this).append('<div class="slick-slide-info"><span class="current"></span> of <span class="total"></span></div>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
    .slick({
      autoplay: false,
      // autoplaySpeed: 3000,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="sli-sto-btn cust-prev"><span></span></button>',
      nextArrow: '<button type="button" class="sli-sto-btn cust-next"><span></span></button>'
      // fade: true,
      // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    });
  });
});
