$(document).ready(function() {


	$(window).resize(function(){
		var winW = $(window).width();
		var winH = $(window).height();
		var minOfWH = Math.min(winH, winW);
		var $clockCtnr = $('.clock-ctnr');

		if (minOfWH < 350) {
			if (winW == minOfWH) {
				$clockCtnr.width($(window).width());
				$clockCtnr.height($(window).width());
			} else {
				$clockCtnr.width($(window).height());
				$clockCtnr.height($(window).height());
			}
		} else {
			$clockCtnr.width(350);
			$clockCtnr.height(350);
		}

	})

	setInterval(function(){
		getTime();
	}, 50);

	function getTime() {
		var d = new Date();
		var s = d.getSeconds() + (d.getMilliseconds()/1000);
		var m = d.getMinutes();
		var h = retrieveHour12();

		$(".s-hand").css("transform", "translate(-50%, -100%) rotate(" + s * 6 + "deg)");
		$(".m-hand").css("transform", "translate(-50%, -100%) rotate(" + m * 6 + "deg)");
		$(".h-hand").css("transform", "translate(-50%, -100%) rotate(" + (h * 30 + m * 0.5) + "deg)");

		function retrieveHour12() {
			var hour = d.getHours();

			if(hour >= 12) {
				hour = hour - 12;
			}
			if(hour == 0) {
				hour = 12;
			}
			return hour;
		}
	}
});
