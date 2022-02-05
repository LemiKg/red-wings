import './assets/scss/style.scss';
// import 'dotenv/config';

import { Loader } from '@googlemaps/js-api-loader';
import Swiper, { Navigation, Pagination } from 'swiper';

const stations = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 30,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
	  '@0.00': {
		slidesPerView: 1,
		spaceBetween: 40
	  },
	  '@0.75': {
		slidesPerView: 2,
		spaceBetween: 40
	  },
	  '@1.00': {
		slidesPerView: 2,
		spaceBetween: 40
	  }
	}
});

const displayResponsiveNav = () => {
    const menu = document.querySelector('.mobile-nav');
    menu.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
	const kragujevac = document.querySelector('#kragujevac');
	const kragujevac2 = document.querySelector('#kragujevac-big');
	const beograd = document.querySelector('#beograd');
	const landing = document.querySelector('#landing');

    const hamburger = document.querySelector('.hamburger');
    const modal = document.querySelector('#modal');

    hamburger.addEventListener('click', displayResponsiveNav);

    const displayModal = () => {
        if (!modal.classList.contains('active')) {
            modal.classList.add('active');
            document.documentElement.classList.add('modal-opened');
        }
    }

    const hideModal = () => {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.documentElement.classList.remove('modal-opened');
        }
    }

	let center;

	if (!landing) {
		if (kragujevac) {
			center = {
				lat: parseFloat(44.014852284600266),
				lng: parseFloat(20.913090546027835)
			}
		} else if (kragujevac2) {
			center = {
				lat: parseFloat(44.00959855726816),
				lng: parseFloat(20.89746522717582)
			}
		} else if (beograd) {
			center = {
				lat: parseFloat(44.015487739645124),
				lng: parseFloat(20.94179649834058)
			}
		}

		Object.assign(mapOptions, { center });

		loader.load().then((google) => {
			const map = new google.maps.Map(document.getElementById('map'), mapOptions);
			new google.maps.Marker({
				position: center,
				map,
				title: "Red Wings!",
			});
		})
		.catch(e => {
			console.log(e);
		});
	}

});

const loader = new Loader({
    apiKey: 'AIzaSyBFgW7nlikqF2g-iO9J2y-iy7L5K0Yf1YU',
    version: 'weekly',
    libraries: ['places']
});

console.log(process.env.API);

const mapOptions = {
    styles: [
        {
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#f5f5f5'
            }
          ]
        },
        {
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#616161'
            }
          ]
        },
        {
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#f5f5f5'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#bdbdbd'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#eeeeee'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#757575'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#e5e5e5'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#ffffff'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#757575'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#dadada'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#616161'
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#e5e5e5'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#eeeeee'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#c9c9c9'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#9e9e9e'
            }
          ]
        }
      ],
    zoom: 18
};

