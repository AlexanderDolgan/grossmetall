$(document).ready(function(){
	
	$('.ham-btn').on('click', function() {
		$('.nav-wrapper').css('left', '0');
		$('.main-nav').addClass('active');
	});

	$('.close-btn').on('click', function() {
		$('.nav-wrapper').css('left', '-100%');
		$('.main-nav').removeClass('active');
	});
	
});