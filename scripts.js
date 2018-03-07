$(document).ready(function(){

  $("#phone-list").css("display", "none");
  var count = 0;
  $('#phone-button').on('click', function() {
    $("#phone-button").toggleClass('menu-open');
    if(count % 2 == 0) {
      $("#phone-list").css("display", "block");
    }else {
      $("#phone-list").css("display", "none");
    }
    count++;
  });

});
