$(document).ready(function () {
	
	$('.next').on('click', function () {
		var currentImage = $('.img.active');
		var currentImageIndex = $('.img.active').index();
		var nextImageIndex = currentImageIndex +1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(800);
	});
});
