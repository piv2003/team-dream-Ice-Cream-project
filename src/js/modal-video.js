const modalMV = document.querySelector('[data-buy-modal-video-modal]');
const overlayMV = document.querySelector('[data-buy-modal-video-overlay]');
const openModalBtnMV = document.querySelector('[data-buy-modal-video-open]');
const closeModalBtnMV = document.querySelector('[data-buy-modal-video-close]');

const openModalMV = function () {
  modalMV.classList.remove('is-hidden');
  overlayMV.classList.remove('is-hidden');
};

openModalBtnMV.addEventListener('click', openModalMV, { passive: true });

const closeModalMV = function () {
  modalMV.classList.add('is-hidden');
  overlayMV.classList.add('is-hidden');
};

closeModalBtnMV.addEventListener('click', closeModalMV, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalMV.classList.contains('is-hidden')) {
      closeModalMV();
    }
  },
  { passive: true }
);
