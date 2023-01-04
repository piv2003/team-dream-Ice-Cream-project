const modalLM = document.querySelector('[data-buy-location-modal]');
const overlayLM = document.querySelector('[data-buy-location-overlay]');
const openModalBtnLM = document.querySelector('[data-buy-location-open]');
const closeModalBtnLM = document.querySelector('[data-buy-location-close]');

const openModalLM = function () {
  modalLM.classList.remove('is-hidden');
  overlayLM.classList.remove('is-hidden');
};

openModalBtnLM.addEventListener('click', openModalLM, { passive: true });

const closeModalLM = function () {
  modalLM.classList.add('is-hidden');
  overlayLM.classList.add('is-hidden');
};

closeModalBtnLM.addEventListener('click', closeModalLM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalLM.classList.contains('is-hidden')) {
      closeModalLM();
    }
  },
  { passive: true }
);
