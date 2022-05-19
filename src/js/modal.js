import modalTpl from '../templates/modal.hbs';
import { fetchEventById, fetchByEventAndCountry, fetchByEvent } from './apiService';
import { createMarkup } from './fetchAndMarkup';
import { refs } from './getRefs';
import { clearPagination } from './searchEvent';

//================================================================

let elId = null;
let searchAuthor;
let selectInformation;

// ====================================================
refs.mainListRef.addEventListener('click', clickListener);
refs.closeBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', closeModalOverlay);

//====================================================
export function clickListener(e) {
  const cards = document.querySelectorAll('.main-item');
  cards.forEach(el => el.addEventListener('click', openModalHandler));
}

function openModalHandler(e) {
  window.addEventListener('keydown', closeModalESC);
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.toggle('is-open');
  elId = e.currentTarget.getAttribute('id');
  // console.log(elId);
  responseByIdAndRender();
}

function modalShowMoreBtnHandler(e) {
  e.preventDefault();
  closeModal();
  clearPagination();
  // refs.inputForm.value = author;
  selectInformation = refs.formSelect.value;
  //states.page = 1;

  if (selectInformation.length > 2) {
    fetchByEvent(refs.inputForm.value)
      .then(data => createMarkup(data))
      .catch(err => console.log(err));
    return;
  }

  fetchByEventAndCountry(searchAuthor, refs.formSelect.value)
    .then(data => createMarkup(data))
    .catch(err => console.log(err));
}

async function responseByIdAndRender() {
  const response = await fetchEventById(elId)
    .then(data => data._embedded.events)
    .then(data => createMarkupForModal(data['0']));

  return response;
}

function createMarkupForModal(data) {
  const event = {
    ...data,
    imgCircleUrl: data.images.find(img => img.width === 305 && img.height === 225),
    imgPosterUrl: data.images.find(img => img.width === 1024 && img.height === 683),
    newTime: data.dates.start.localTime
      ? data.dates.start.localTime.split(':').slice(0, 2).join(':')
      : '',
  };
  const renderEl = modalTpl(event);

  searchAuthor = data.name;

  refs.modalMainContainer.innerHTML = renderEl;
  const showInfo = document.querySelector('.modal__more-info-link');
  showInfo.addEventListener('click', modalShowMoreBtnHandler);
}

function closeModalESC(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModalOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  window.removeEventListener('keydown', closeModalESC);
  document.body.classList.toggle('is-open');
  refs.modalBackdrop.classList.add('is-hidden');
  refs.modalMainContainer.innerHTML = '';
}
