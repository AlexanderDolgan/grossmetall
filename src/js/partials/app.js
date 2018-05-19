$(document).ready(function(){

	//mobile navigation
	var $navOpenBtn = $('.nav-open-btn'),
			$body = $('body'),
			$navMob = $('.nav-mob'),
			$closeBtn = $('.close-btn');

	$navOpenBtn.on('click', function() {
		$body.toggleClass('is-movied');
		$navMob.toggleClass('active-nav');
	});

	$(document).keyup(function(e) {     
    if(e.keyCode== 27) {
			// $body.removeClass('no-scroll');
			$navMob.removeClass('active-nav');
    } 
	});

	$body.click(function(e) {
		if(e.target.id !== 'nav-open-btn'){
			$navMob.removeClass('active-nav');
		}      
	});

	$closeBtn.on('click', function() {
		// $body.removeClass('no-scroll');
		$navMob.removeClass('active-nav');
	});


	//sticky navigation
	var $header = $('.header-mid'),
	$clone = $header.before($header.clone().addClass("clone"));

	$(window).on('scroll', function() {
		var fromTop = $('body').scrollTop();
		$('body').toggleClass("down", (fromTop > 200));
	});

});