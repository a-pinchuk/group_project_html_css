(() => {
    const refs = {
      openModalHeroBtn: document.querySelector('[data-modal-open-hero]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalHeroBtn.addEventListener('click', toggleModalHero);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModalHero() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();