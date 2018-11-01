//mobile navigation menu events
var navMob = document.getElementById('nav-mob'),
		navWidth = '-46.875rem';

function openNav() {
	event.stopPropagation();
	navMob.style.right = '0';
	navMob.classList.add('active-nav');
	document.body.style.overflow = 'hidden';
}

function closeNav() {
	event.stopPropagation();
	navMob.style.right = navWidth;
	navMob.classList.remove('active-nav');
	document.body.style.overflow = 'scroll';
}

//body click
document.addEventListener('click', function() {
	event.stopPropagation();
	navMob.style.right = navWidth;
	navMob.classList.remove('active-nav');
	document.body.style.overflow = 'scroll';
});


// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var lastKnownScrollPosition = 0;
var ticking = false;

function addBackNav(scrollPos) {
	
	var headerTop = document.getElementsByClassName('header-top')[0],
		headerTopWrapper = headerTop.getElementsByClassName('wrapper')[0],
		headerTopInside = document.getElementsByClassName('header-top-inside')[0];
		// siteMain = document.getElementById('site-main');
		
  if (scrollPos > 0) {
		headerTop.style.backgroundColor = 'white';
		headerTopWrapper.style.paddingTop = '1rem';
		headerTopWrapper.style.paddingBottom = '1rem';
		if (headerTopInside) {
			headerTopInside.style.position = 'fixed';
			// siteMain.style.marginTop = '83px';
		}
	} else {
		headerTop.style.backgroundColor = 'transparent';
		headerTopWrapper.style.paddingTop = '2rem';
		headerTopWrapper.style.paddingBottom = '2rem';
		if (headerTopInside) {
			headerTopInside.style.position = 'relative';
			// siteMain.style.marginTop = '0';
		}
	}
}

window.addEventListener('scroll', function(e) {

  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      addBackNav(lastKnownScrollPosition);
			ticking = false;
    });
     
    ticking = true;
  }
})

$( document ).ready(function() {
	$('.hero').slick({
		lazyLoad: 'progressive',
		ltr: true,
		infinite: true,
		dots: true,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	$('.hero-item').css(
		{
			'display' : 'flex'
		}
	);

});