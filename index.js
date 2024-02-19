// burger
const burger = document.querySelector('.burger');
const menuContact = document.querySelector('.header .menu');
burger.addEventListener('click', ()=> {
    const bodyPage = document.querySelector('body');
    bodyPage.style.paddingRight = `${window.innerWidth -  document.querySelector('body').clientWidth}px`;
    bodyPage.style.overflow = 'hidden';
    
    menuContact.classList.toggle('open');
    burger.classList.toggle('btn-close');

    if(menuContact.classList.contains('open') === false) {
        bodyPage.style.overflow = '';
        bodyPage.style.paddingRight = '';
    }
})

const themeBtn = document.querySelector('.header-theme');

themeBtn.addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('dark');
});

// fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    // Custom options for the first gallery
});
// map yandex
let center = [56.300601, 43.854661];
function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 13
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.geoObjects.add(placemark);
}
ymaps.ready(init);
// year
const year = document.getElementById('year');
year.innerHTML = `© ${new Date().getFullYear()}`;