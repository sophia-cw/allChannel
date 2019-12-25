$(document).ready(function(){
  //當是pc時
  var allPC = window.matchMedia( "(min-width: 769px)" );
  //當是手機時
  var allMOBILE = window.matchMedia( "(max-width: 768px)");

  //GoTop SHOW
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".goTop").fadeIn();
    } else {
      $(".goTop").fadeOut();
    }
  });

  //GoTop
  $(".goTop").click(function(){
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({scrollTop: 0}, 600, "easeInOutCubic");
    return false;
  });

})