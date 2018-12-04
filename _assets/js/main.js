// general js for the project that wouldn't be a reuseable component


function bgFade(){
  var st = $(document).scrollTop();
  var wh = $(window).height();
  var opacity = ((wh - (st*2)) / -wh)+1;

  if(st<wh && opacity<0.9){
  	$('.js-overlay-fade').css({
  		"opacity": opacity
  	});
  }
}

bgFade();
$(document).scroll(function(){ bgFade(); });



/* ===================================================
    ADVENT CALENDAR
----------------------------------------------------*/

var today = new Date();
var currDay = today.getDate();

if( today.getMonth() == '11'){
  // if October (month -1)
  $('.advent-day').each(function( index, el ){
    var dayNum = $( el ).attr('data-day');

    // disable all days after todays date
    if( currDay < dayNum ){
      $( el ).addClass('advent-day--inactive');
      $( el ).find('.advent-day__link').remove();
    }

    // highlight current day
    if( currDay == dayNum ){
      $( el ).addClass('advent-day--today');
    }
  });
}else{
  $('.advent-day').each(function( index, el ){
    $( el ).addClass('advent-day--inactive');
  });
}


