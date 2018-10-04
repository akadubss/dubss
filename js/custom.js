$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});






$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('#plx').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * .05) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.75) + 'px');
    }
  })
}