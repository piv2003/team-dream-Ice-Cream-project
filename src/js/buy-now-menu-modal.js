const modalBNM = document.querySelector('[data-buy-now-menu-modal]');
const overlayBNM = document.querySelector('[data-buy-now-menu-overlay]');
const openModalBtnBNM = document.querySelector('[data-buy-now-menu-open]');
const closeModalBtnBNM = document.querySelector('[data-buy-now-menu-close]');

const openModalBNM = function () {
  modalBNM.classList.remove('is-hidden');
  overlayBNM.classList.remove('is-hidden');
};

openModalBtnBNM.addEventListener('click', openModalBNM, { passive: true });

const closeModalBNM = function () {
  modalBNM.classList.add('is-hidden');
  overlayBNM.classList.add('is-hidden');
};

closeModalBtnBNM.addEventListener('click', closeModalBNM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalBNM.classList.contains('is-hidden')) {
      closeModalBNM();
    }
  },
  { passive: true }
);
