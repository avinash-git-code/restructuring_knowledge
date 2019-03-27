$(document).ready(function(){
    $('.ts_nw_list:first-of-type').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false
    });

    $('.carousel_list').slick({
         infinite: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: '<button type="button" class="snp cust-prev"><span></span></button>',
         nextArrow: '<button type="button" class="snp cust-next"><span></span></button>'
      });
});
