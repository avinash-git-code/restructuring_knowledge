
$(document).ready(function(){

    $(document).on('click', '#nav-hm-btn', function(){
      if( $(this).hasClass('cross-btn') ){
        $(this).removeClass('cross-btn')
        .attr('title', 'Menu button');
      }else{
        $(this).addClass('cross-btn')
        .attr('title', 'Close menu');
      }
    });

    $('.ts_nw_list:first-of-type').slick({
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false
    });

    $('.carousel_list').slick({
        autoplay:false,
        autoPlaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="snp cust-prev"><span></span></button>',
        nextArrow: '<button type="button" class="snp cust-next"><span></span></button>'
    });

  $(".carousel_list_new").slick({
    autoplay: false,
    autoPlaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="snp cust-prev"><span></span></button>',
    nextArrow:
      '<button type="button" class="snp cust-next"><span></span></button>'
  });



  $(function() {
    $(".slider_stories_cont ul")
      .on("init", function(event, slick) {
        $(this).append(
          '<div class="slick-slide-info"><span class="current"></span> of <span class="total"></span></div>'
        );
        $(".current").text(slick.currentSlide + 1);
        $(".total").text(slick.slideCount);
      })
      .slick({
        autoplay: false,
        // autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="sli-sto-btn cust-prev"><span></span></button>',
        nextArrow:
          '<button type="button" class="sli-sto-btn cust-next"><span></span></button>'
        // fade: true,
        // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
      })
      .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 1);
      });
  });

  $(".tv-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
      '<button type="button" class="footer-tv-slides cust-prev" title="Pervious"></button>',
    nextArrow:
      '<button type="button" class="footer-tv-slides cust-next" title="Next"></button>'
  });

var widgetLogo = '', sponserList =  '', data = '', impTrackerId = [], impTrackerLink = [], impTrackerHTML = '';
  $.ajax({
    dataType: 'json',
    url: 'widgetdata.json',
    data: data,
    success: function(data) {
      var sponsorLogo = data.sponosrWidget;
      var sponsorList = data.sponsorList;
      var widgetLogo = '<a class="top-widget-landing" href="/'+sponsorLogo.logoUrl+'">';
          widgetLogo +='<img src="//'+sponsorLogo.logoImage+'" alt=""></a>';
          $('#widget-logo').removeClass('loading-image').html(widgetLogo);
          for (key in sponsorList ){
              sponserList += '<li><a href="//'+ sponsorList[key].sponsorLandingUrl +'" title="'+ sponsorList[key].sponsorTitle +'" target="_blank">';
              sponserList += '<img src="//'+ sponsorList[key].sponserImage +'" alt=""></a></li>';
              impTrackerHTML += '<div id="'+ sponsorList[key].defineSlotId +'" style="height:1px;width:1px;"></div>'
              impTrackerId.push(sponsorList[key].defineSlotId);
              impTrackerLink.push(sponsorList[key].defineSlot);

          }
          // $('#sponser-list').html(sponserList); 
          // sponserList += sponserList;
          $('#sponsor-top-widget').append(impTrackerHTML);
          $('#sponser-list').removeClass('js-error ').html(sponserList).slick({
              dots: false,
              infinite: true,
              speed: 500,
              arrows:false,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoPlaySpeed: 4000,
              edgeFriction: .50,
              speed: 1500,
               responsive: [{
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2
                    }
                  }]
          });
          console.log(impTrackerId);
          console.log(impTrackerLink.length);
          setTimeout(function(){
            for(var i=0; i<impTrackerLink.length; i++){
              console.log(impTrackerId[i]);
              console.log(impTrackerLink[i]);
              googletag.cmd.push(function() {
                googletag.defineSlot(impTrackerLink[i], [1, 1], impTrackerId[i]).addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
              googletag.cmd.push(function() { googletag.display(impTrackerId[i]); });
            }
          },500)
    },
  });
});
