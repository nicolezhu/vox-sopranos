// full-width images
function browserWide() {
  var window_width = $(window).width();
  $(".fullbleed").css({
    'position' : 'relative',
    'width' : window_width,
    'left' : $('.chorus-snippet').offset().left * -1
  });
};

// set black screen to window height + padding?
function browserTall() {
	var window_height = $(window).height();
	$('#toblack-img').css({
		'height' : window_height*1.2
	});
};

// waypoints cut-to-black animation
function waypointsScroll() {
	$(".tony").waypoint(function(direction) {
		if (direction == "down") {
			$("#toblack").show();
			$(".chase-quote").show();
			$("#screenshot").hide();
		} else {
			$("#toblack").hide();
			$(".chase-quote").hide();
			$("#screenshot").show();
		}
	});
}

// enable/disable waypoints based on screen size
function toggleWaypoints() {
	if ($(window).width() <= 480) {
		// disable waypoints and animation, show paragraph quote, ONLY show screencap
		$("#toblack").hide();
		$(".chase-quote").hide();
		$("#screenshot").show();
		$.waypoints('disable');
		$('#hidden-quote').show();
	} else {
		// enable waypoints and animation, hide paragraph quote
		$.waypoints('enable');
		$('#hidden-quote').hide();
		waypointsScroll();
	}
}

// init
$(document).ready(function() {
	browserWide();
	browserTall();
	toggleWaypoints();

	$.waypoints('viewportHeight');
	$("#toblack").hide();
	$(".chase-quote").hide();

	$(window).resize(function() {
		browserWide();
		browserTall();
		toggleWaypoints();
	});
});