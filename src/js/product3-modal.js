const modalPM3 = document.querySelector('[data-buy-product3-modal]');
const overlayPM3 = document.querySelector('[data-buy-product3-overlay]');
const openModalBtnPM3 = document.querySelector('[data-buy-product3-open]');
const closeModalBtnPM3 = document.querySelector('[data-buy-product3-close]');

const openModalPM3 = function () {
  modalPM3.classList.remove('is-hidden');
  overlayPM3.classList.remove('is-hidden');
};

openModalBtnPM3.addEventListener('click', openModalPM3, { passive: true });

const closeModalPM3 = function () {
  modalPM3.classList.add('is-hidden');
  overlayPM3.classList.add('is-hidden');
};

closeModalBtnPM3.addEventListener('click', closeModalPM3, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalPM3.classList.contains('is-hidden')) {
      closeModalPM3();
    }
  },
  { passive: true }
);
