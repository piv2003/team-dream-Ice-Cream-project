const modalproducts = () => {
  const triggersBtn = document.querySelectorAll('.js-products-open'),
    overflowWindow = document.querySelector('.js-overflow'),
    closeBtn = document.querySelector('.js-modal-close');
  iconSvg = document.querySelector('.js-modal-close');

  triggersBtn.forEach(btn =>
    btn.addEventListener('click', () => {
      overflowWindow.classList.toggle('is-hidden');
    })
  );

  closeBtn.addEventListener('click', e => {
    if (e.target === closeBtn) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });

  overflowWindow.addEventListener('click', e => {
    if (e.target === overflowWindow) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });

  iconSvg.addEventListener('click', e => {
    if (e.target === iconSvg) {
      overflowWindow.classList.toggle('is-hidden');
    }
  });
};

modalproducts();
