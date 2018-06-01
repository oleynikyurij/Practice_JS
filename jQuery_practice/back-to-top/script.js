$(document).ready(function () {
	
	var btnTop = $('.btn_top');

	$(window).on('scroll', function () {
		
		if ( $(window).scrollTop() >= 20 ) {
			btnTop.fadeIn(400);
		} else {
			btnTop.fadeOut(400);
		}
	});

	btnTop.on('click', function () {
		$('html,body').animate({scrollTop: 0 }, 900);
	});

});
