import './assets/scss/style.scss';
import 'material-icons/iconfont/material-icons.css';
import Glide from '@glidejs/glide';

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
    gap: 50
});

document.addEventListener('DOMContentLoaded', () => {
    cover.mount();
    stations.mount();

    const orderBtn = document.querySelector('.order-button input');
    const closeBtn = document.querySelector('#closeBtn');
    const modal = document.querySelector('#modal');
    const topNavigation = document.querySelector('#modal');
    // const sticky = subnavigation.offsetTop;

    const displayModal = () => {
        if (!modal.classList.contains('active')) {
            modal.classList.add('active');
        }
    }

    const hideModal = () => {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }

    // const stickyHeader = () => {
    //     if (window.pageYOffset > sticky) {
    //         subnavigation.classList.add('sticky');
    //     } else {
    //         subnavigation.classList.remove('sticky');
    //     }
    // }

    orderBtn.addEventListener('click', displayModal);
    closeBtn.addEventListener('click', hideModal);
    document.addEventListener('click', e => {
        if (!orderBtn.contains(e.target) && !modal.contains(e.target)) {
            hideModal();
        }
    });

    // window.addEventListener('scroll', stickyHeader);

    insertWings(27);
});
