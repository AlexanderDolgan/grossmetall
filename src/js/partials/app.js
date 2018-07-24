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
		
  if (scrollPos > 0) {
		headerTop.style.backgroundColor = 'white';
		headerTopWrapper.style.paddingTop = '1rem';
		headerTopWrapper.style.paddingBottom = '1rem';
		if (headerTopInside) {
			headerTopInside.style.position = 'fixed';
			// headerTopInside.style.top = '0';
		}
	} else {
		headerTop.style.backgroundColor = 'transparent';
		headerTopWrapper.style.paddingTop = '2rem';
		headerTopWrapper.style.paddingBottom = '2rem';
		if (headerTopInside) {
			headerTopInside.style.position = 'relative';
			// headerTopInside.style.top = '-105%';
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
		ltr: true,
		infinite: true,
		autoplay: true,
		dots: true,
		pauseOnHover: false,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.hero-item').css(
		{
			'display' : 'flex'
		}
	);

});

// Yandex Map
ymaps.ready(init);

function init() {

    ////YandexApi map
    var grossMetallMap = new ymaps.Map("map", {
            center: [55.738505, 37.641243],
            zoom: 17,

            //убрать кнопки управления
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Круг".
        grossMetallPlacemark = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.738505, 37.641243]
            }
        });

    grossMetallMap.geoObjects.add(grossMetallPlacemark);


// отключается zoom при прокрутке страницы
		grossMetallMap.behaviors.disable('scrollZoom');
		// grossMetallMap.behaviors.disable('drag');






	////YandexApi map
    var grossMetallMap2 = new ymaps.Map("map2", {
            center: [55.551084, 37.071495], //megobari hostel
            zoom: 17,

            //убрать кнопки управления
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Круг".
        grossMetallPlacemark2 = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.551084, 37.071495]
            }
        });

    grossMetallMap2.geoObjects.add(grossMetallPlacemark2);


// отключается zoom при прокрутке страницы
		grossMetallMap2.behaviors.disable('scrollZoom');
		// grossMetallMap.behaviors.disable('drag');
}