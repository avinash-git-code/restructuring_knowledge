$(function() {
  $('#list-one, #list-two, #list-three').sortable({ connectWith: '.droppable' });
  $('#list-two, #list-three, #list-one').sortable({ connectWith: '#list-one, #list-two, #list-three' })
  .on('sortable:receive', function(e, ui) {
    ui.item.removeClass('draggable');
    updatePartyValues();
  });
})

function updatePartyValues(){
  setTimeout(function(){
    var listone=0, listtwo=0, listthree=0;
    $('#list-one li').each(function(){
      listone += parseInt($(this).text());
    });
    $('#list-two li').each(function(){
      listtwo += parseInt($(this).text());
    });
    $('#list-three li').each(function(){
      listthree += parseInt($(this).text());
    });
    $('#bjp').text(listone);
    $('#cong').text(listtwo);
    $('#oth').text(listthree);
  });
  return 0;
}
