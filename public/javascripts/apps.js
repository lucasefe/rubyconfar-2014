$(document).ready(function() {

  $("section#start").height($(window).height());

  var arr = ['horseboy', 'erlich', 'woz', 'moss'];
  var idx = Math.floor(Math.random() * arr.length);
  $('section#start').addClass(arr[idx]);

  $("#home nav a.circle").click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    event.preventDefault();
    var $anchor = $('#' + this.hash.substring(1));
    $('html,body').animate({ 
        scrollTop: $anchor.offset().top
    }, 799, 'easeOutBack');

    if ( $('#mobileMenuTrigger').hasClass('active') ) {
      $('#mobileMenuTrigger').click();
    }
  });

  // Mobile Navigation Trigger
  $('#mobileMenuTrigger').click(function(){
    $(this).next().slideToggle();
    $('section').toggleClass('fade');
    $(this).toggleClass('active');
    return false;
  });


  
  if(window.location.href.indexOf("horseboy") > -1) {
    $('section#start').removeClass();
    $('section#start').addClass('horseboy');
  }
  if(window.location.href.indexOf("erlich") > -1) {
    $('section#start').removeClass();
    $('section#start').addClass('erlich');
  }
  if(window.location.href.indexOf("woz") > -1) {
    $('section#start').removeClass();
    $('section#start').addClass('woz');
  }
  if(window.location.href.indexOf("moss") > -1) {
    $('section#start').removeClass();
    $('section#start').addClass('moss');
  }





});

$(window).resize(function() {
	$("section#start").height($(window).height());

  // Hack for when closing Mobile Nav on Desktop and then enlarging window.
  var windowWidth = $(window).width();
  if (windowWidth > 500) {
    $('nav').attr('style', ''); // removes display: none
  }

});



$(window).scroll(function(){
  var windowTop = $(window).scrollTop(); // returns number  

  if (windowTop > 120) {
    $('header .fist-logo').addClass('fixed');
  }
  else {
    $('header .fist-logo').removeClass('fixed');
  }  
  // console.log(windowTop);

});







