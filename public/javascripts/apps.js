
$(document).ready(function() {
  $("header").height($(window).height());

  var arr = ['horse', 'erlich', 'woz', 'moss'];
  var idx = Math.floor(Math.random() * arr.length);
  $('header').addClass(arr[idx]);

});

$(window).resize(function() {
	$("header").height($(window).height());
});