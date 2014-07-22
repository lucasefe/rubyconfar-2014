
$(document).ready(function() {
  $("section#start").height($(window).height());

  var arr = ['horse', 'erlich', 'woz', 'moss'];
  var idx = Math.floor(Math.random() * arr.length);
  $('section#start').addClass(arr[idx]);


  $("#home nav a.nav-item").click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    event.preventDefault();
    var $anchor = $('#' + this.hash.substring(1));
    $('html,body').animate({ 
        scrollTop: $anchor.offset().top
    }, 999, 'easeInOutBack');
  });

});

$(window).resize(function() {
	$("section#start").height($(window).height());
});