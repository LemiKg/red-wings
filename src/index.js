import './assets/scss/style.scss';
import Glide from '@glidejs/glide';

import { Loader } from '@googlemaps/js-api-loader';

const cover = new Glide('.cover', {
    type: 'carousel',
    autoplay: 6000,
    focusAt: '1',
    startAt: 1,
    perView: 1,
    gap: 0
});

const stations = new Glide('.stations', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 50,
    peek: 20,
    breakpoints: {
        800: {
            perView: 1
        }
    }
});

const displayResponsiveNav = () => {
    const menu = document.querySelector('.mobile-nav');
    menu.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    cover.mount();
    stations.mount();
    
    const hamburger = document.querySelector('.hamburger');
    const orderBtns = document.querySelectorAll('.orderBtn');
    const closeBtn = document.querySelector('#closeBtn');
    const modal = document.querySelector('#modal');
    const topNavigation = document.querySelector('#modal');
    const responsiveOrderBtn = document.querySelector('#responsiveOrderBtn');
    const orderBtn = document.querySelector('#orderBtn');
    const mobOrderBtn = document.querySelector('#mobOrderBtn');
    // const sticky = subnavigation.offsetTop;

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

    // const stickyHeader = () => {
    //     if (window.pageYOffset > sticky) {
    //         subnavigation.classList.add('sticky');
    //     } else {
    //         subnavigation.classList.remove('sticky');
    //     }
    // }

    orderBtns.forEach(btn => {
        btn.addEventListener('click', displayModal);
    })

    closeBtn.addEventListener('click', hideModal);

    document.addEventListener('click', e => {
        if (!orderBtn.contains(e.target) && 
            !modal.contains(e.target) &&
            !responsiveOrderBtn.contains(e.target) && 
            !mobOrderBtn.contains(e.target)) {
            hideModal();
        } 
    });

    // window.addEventListener('scroll', stickyHeader);
});


const loader = new Loader({
    apiKey: "AIzaSyD9AthvQc_IFuFFpHSxrjEYtYrMYLYgaaw",
    version: "weekly",
    libraries: ["places"]
});
  
const mapOptions = {
    center: {
        lat: 44.014852284600266,
        lng: 20.913090546027835
        
    },
    styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
    
    zoom: 4
};

loader
    .load()
    .then((google) => {
        new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch(e => {
        console.log(e);
  });