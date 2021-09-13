
//===================================================
const ref = {
    galleryList: document.querySelector('.main-list'),
    modalOverlay: document.querySelector('.modal__backdrop'),
    closeBtn: document.querySelector('[data-action="close-lightbox"]'),
    modalLightBox: document.querySelector('.modal__lightbox'),
}

//====================================================
ref.galleryList.addEventListener('click', onModalOpen);
ref.closeBtn.addEventListener('click', closeModal);
ref.modalOverlay.addEventListener('click', closeModalOverlay);
window.addEventListener('keydown', closeModalESC);


//====================================================
function onModalOpen(e) {
    e.preventDefault();
ref.modalLightBox.classList.add('is-open');

    
}
function closeModalESC(event) {
    if (event.key === 'Escape') {
        closeModal(event);
    }
};


function closeModalOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};


function closeModal() {
    ref.modalLightBox.classList.remove('is-open');   
};
//====================================================