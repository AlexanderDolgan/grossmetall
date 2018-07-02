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

document.addEventListener('click', function() {
	event.stopPropagation();
	navMob.style.right = navWidth;
	navMob.classList.remove('active-nav');
	document.body.style.overflow = 'scroll';
});