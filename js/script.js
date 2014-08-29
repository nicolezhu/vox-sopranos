// CHORUS
function browserWide() {
  var window_width = $(window).width();
  $(".fullbleed").css({
    'position' : 'relative',
    'width' : window_width,
    'left' : $('.chorus-snippet').offset().left * -1
  });
};

$(document).ready(function() {
window.onresize = browserWide;
$.waypoints('viewportHeight');
$("#toblack").hide();
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

// testing
$(document).ready(function() {
	browserWide();
	window.onresize = browserWide;
	$(".chase-quote").waypoint(function(direction) {
		if (direction == "down") {
			console.log("down");
			$(".chase-quote span").fadeIn(800);
		} else {
			console.log("up");
			$(".chase-quote span").fadeOut(800);
		}
	});
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