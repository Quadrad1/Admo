$(document).ready(function() {
  $(".toogle-menu").click(function(){
    $(".side-bar").slideToggle(300, function(){
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $(".radio").click(function () {
    $(".r-item").removeClass('r-item-red');
    $(this).children().addClass('r-item-red');
  });
});
