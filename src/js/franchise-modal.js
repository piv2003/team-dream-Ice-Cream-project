const modalFM = document.querySelector('[data-buy-franchise-modal]');
const overlayFM = document.querySelector('[data-buy-franchise-overlay]');
const openModalBtnFM = document.querySelector('[data-buy-franchise-open]');
const closeModalBtnFM = document.querySelector('[data-buy-franchise-close]');

const openModalFM = function () {
  modalFM.classList.remove('is-hidden');
  overlayFM.classList.remove('is-hidden');
};

openModalBtnFM.addEventListener('click', openModalFM, { passive: true });

const closeModalFM = function () {
  modalFM.classList.add('is-hidden');
  overlayFM.classList.add('is-hidden');
};

closeModalBtnFM.addEventListener('click', closeModalFM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalFM.classList.contains('is-hidden')) {
      closeModalFM();
    }
  },
  { passive: true }
);
