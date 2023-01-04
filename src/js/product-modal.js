const modalPM = document.querySelector('[data-buy-product-modal]');
const overlayPM = document.querySelector('[data-buy-product-overlay]');
const openModalBtnPM = document.querySelector('[data-buy-product-open]');
const closeModalBtnPM = document.querySelector('[data-buy-product-close]');

const openModalPM = function () {
  modalPM.classList.remove('is-hidden');
  overlayPM.classList.remove('is-hidden');
};

openModalBtnPM.addEventListener('click', openModalPM, { passive: true });

const closeModalPM = function () {
  modalPM.classList.add('is-hidden');
  overlayPM.classList.add('is-hidden');
};

closeModalBtnPM.addEventListener('click', closeModalPM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalPM.classList.contains('is-hidden')) {
      closeModalPM();
    }
  },
  { passive: true }
);
