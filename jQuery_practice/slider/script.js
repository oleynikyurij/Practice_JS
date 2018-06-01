$(document).ready(function () {
	
	$('.next').on('click', function () {
		var currentImage = $('.img.active');
		var currentImageIndex = $('.img.active').index();
		var nextImageIndex = currentImageIndex +1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(800);
		currentImage.removeClass('active');

		if ( nextImageIndex == ($('.img:last').index() + 1)) {
			$('.img').eq(0).fadeIn(800);
			$('.img').eq(0).addClass('active');
		} else {
			nextImage.fadeIn(800);
			nextImage.addClass('active');
		}
	});

  $('.prev').on('click', function () {
		var currentImage = $('.img.active');
		var currentImageIndex = $('.img.active').index();
		var prevImageIndex = currentImageIndex -1;
		var prevImage = $('.img').eq(prevImageIndex);

		currentImage.fadeOut(800);
		currentImage.removeClass('active');
		prevImage.fadeIn(800);
		prevImage.addClass('active');
	});

});
