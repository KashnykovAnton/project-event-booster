import modalTpl from '../tamplates/modal.hbs';
import fetchEvent from '../js/apiService';

import { states } from './searchEvent';

const ref = {
    galleryList: document.querySelector('.main-list'),
    modalBackdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.js-close-btn'),
    modalLightBox: document.querySelector('.modal__main-container'),
}

// ====================================================
ref.galleryList.addEventListener('click', handleListener);
ref.closeBtn.addEventListener('click', closeModal);
ref.modalBackdrop.addEventListener('click', closeModalOverlay);
window.addEventListener('keydown', closeModalESC);


//====================================================
function handleListener(e) {
    const cards = document.querySelectorAll('.main-item');
cards.forEach(el=>el.addEventListener('click', onModalOpen));
// console.log(cards);
}

 function onModalOpen(e) {
    e.preventDefault();
    document.body.classList.add('modal-open');
ref.modalBackdrop.classList.toggle('is-hidden');

// const id = e.currentTarget.getAttribute('id');

let elId = e.currentTarget.getAttribute('id');
console.log(elId);

const response = fetchEvent(states.query, states.page)
.then(data => data._embedded.events)
.then(data=>data.filter(el => el.id === elId))
.then(data=> createMarkupModal(data['0']));
    
}

function createMarkupModal(data) {
    // const renderEl = modalTpl(response['0']);
    ref.modalLightBox.innerHTML = modalTpl(data);  
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
    document.body.classList.toggle('modal-open');
    ref.modalBackdrop.classList.toggle('is-hidden');
};
// ====================================================