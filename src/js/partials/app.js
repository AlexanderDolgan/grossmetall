$(document).ready(function(){
	
	$('.nav-open-btn').on('click', function() {
		$('body').addClass('no-scroll');
		$('.nav-mob').addClass('active-nav');
	});

	$('.body').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.nav-mob').removeClass('active-nav');
	});

	$('.close-btn').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.nav-mob').removeClass('active-nav');
	});
});