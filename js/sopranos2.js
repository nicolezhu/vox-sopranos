function browserWide() {
  var window_width = $(window).width();
  $(".fullbleed").css({
    'position' : 'relative',
    'width' : window_width,
    'left' : $('.chorus-snippet').offset().left * -1
  });
};

function browserTall() {
	var window_height = $(window).height();
	$('#toblack-img').css({
		'height' : window_height
	});
};

$(document).ready(function() {
	browserWide();
	browserTall();
	$.waypoints('viewportHeight');
	$("#toblack").hide();

	$(window).resize(function() {
		browserWide();
		browserTall();
	});

	$(".chase-quote").hide();
	$(".tony").waypoint(function(direction) {
		if (direction == "down") {
			console.log("hello");
			$("#toblack").show();
			$(".chase-quote").show();
			$("#screenshot").hide();
		} else {
			console.log("coming up");
			$("#toblack").hide();
			$(".chase-quote").hide();
			$("#screenshot").show();
		}
	});
});