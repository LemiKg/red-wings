import "./assets/scss/style.scss";

document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.querySelector('.order-button input');
    const closeBtn = document.querySelector('#closeBtn');
    const modal = document.querySelector('#modal');
    const topNavigation = document.querySelector('#modal');
    const subnavigation = document.querySelector('.sub-navigation');
    const sticky = subnavigation.offsetTop;
    const bgAnimationDiv = document.querySelector('.falling-wings');

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

    const stickyHeader = () => {
        if (window.pageYOffset > sticky) {
            subnavigation.classList.add('sticky');
        } else {
            subnavigation.classList.remove('sticky');
        }
    }

    const insertWings = numberOfWings => {
        for (let i = 0; i < numberOfWings; i++) {
            const currentClass = i % 2 ? 'left' : 'right';
            bgAnimationDiv.innerHTML += `<span class='${currentClass} wing'></span>`;
        }
    }

    orderBtn.addEventListener('click', displayModal);
    closeBtn.addEventListener('click', hideModal);
    document.addEventListener('click', e => {
        if (!orderBtn.contains(e.target) && !modal.contains(e.target)) {
            hideModal();
        }
    });

    window.addEventListener('scroll', stickyHeader);

    insertWings(27);
});
