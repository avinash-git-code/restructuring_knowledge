$(document).ready(function(){
  var widgetLogo = '', sponserList =  '', data = '', impTrackerId = [], impTrackerLink = [], impTrackerHTML = '', hostName, domain, domainData='';
  hostName = "betahindi.news18.com";
  hostName = hostName.split('.');
  domain = hostName[0];
  if( domain.includes('beta') ){
    domain = domain.slice(4, domain.length);
  }
  $.ajax({
    dataType: 'json',
    url: 'widgetdata.json',
    data: data,
    success: function(data) {
      for(key in data ){
        // console.log(key);
        if(key == domain){
          domainData = data[key];
          $('body').addClass(key);
          break;
        }
      }
      // console.log(domainData);
      var sponsorLogo = domainData.sponosrWidget;
      var sponsorList = domainData.sponsorList;
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
          $('#imp-tracker-cont').append(impTrackerHTML);
          setTimeout(function(){
            $('#sponser-list').removeClass('js-error').html(sponserList).slick({
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
          },700)

          if( $('#imp-tracker-cont').length ){
            for(var i=0; i<impTrackerLink.length; i++){
              // console.log(impTrackerId[i]);
              // console.log(impTrackerLink[i]);
              googletag.cmd.push(function() {
                googletag.defineSlot(impTrackerLink[i], [1, 1], impTrackerId[i]).addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
              });
              googletag.cmd.push(function() { googletag.display(impTrackerId[i]); });
            }
          }
    },
  });

  var allConstituency = [], constUrl = 'https://election.nw18.com/electiondata/electionjson/general_election_2019/live/lok_sabha/constituency/';

  $.ajax({
    dataType: 'json',
    url: 'all_cons_list.json',
    data: data,
    success: function(data) {
      for(key in data ){
        allConstituency.push(key.toLowerCase());
        }
        getConstituency();
      }
  });

  function getConstituency(){
    $.ajax({
      dataType: 'json',
      url: 'https://election.nw18.com/electiondata/electionjson/general_election_2019/live/lok_sabha/switchdata.json',
      // url: constUrl+allConstituency[0]+'.json',
      data: data,
      success: function(data) {
        for(key in data ){
          console.log('new key', data);
          }
        }
    });
  }

});
