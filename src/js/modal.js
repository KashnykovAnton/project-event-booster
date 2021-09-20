import modalTpl from '../templates/modal.hbs';
import fetchEvent from './apiService';
import { onSearchEvent } from './searchEvent';
import { refs } from './getRefs';
import { states } from './getStates';

//================================================================

let elId = null;
let author;

// ====================================================
refs.mainListRef.addEventListener('click', clickListener);
refs.closeBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', closeModalOverlay);
window.addEventListener('keydown', closeModalESC);

//====================================================
export function clickListener(e) {
  const cards = document.querySelectorAll('.main-item');
  cards.forEach(el => el.addEventListener('click', openModalHandler));
}

function openModalHandler(e) {
  refs.modalBackdrop.classList.remove('is-hidden');
  document.body.classList.toggle('is-open');
  elId = e.currentTarget.getAttribute('id');
  responseByIdAndRender();
}

function modalShowMoreBtnHandler(e) {
  e.preventDefault();

  closeModal();
  refs.inputForm.value = author;
}

async function responseByIdAndRender() {
  const response = await fetchEvent(states.query, states.page, states.country)
    .then(data => data._embedded.events)
    .then(data => filter(data))
    .then(data => createMarkupForModal(data['0']));

  return response;
}

function filter(data) {
  const dataEl = data.filter(el => el.id === elId);
  return dataEl;
}

function createMarkupForModal(data) {
  author = data.name;
  // console.log(author);
  const event = {
    ...data,
    imgCircleUrl: data.images.find(img => img.width === 305 && img.height === 225),
    imgPosterUrl: data.images.find(img => img.width === 1024 && img.height === 683),
    newTime: data.dates.start.localTime ? data.dates.start.localTime.split(':').slice(0, 2).join(':') : '',
  };
  const renderEl = modalTpl(event);

  refs.modalMainContainer.innerHTML = renderEl;
  const showInfo = document.querySelector('.modal__more-info-link');
  showInfo.addEventListener('click', modalShowMoreBtnHandler);
  //console.log(showInfo);
}

function closeModalESC(event) {
  if (event.key === 'Escape') {
    closeModal(event);
  }
}

function closeModalOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.toggle('is-open');
  refs.modalBackdrop.classList.toggle('is-hidden');
  refs.modalMainContainer.innerHTML = '';
}

function clearModalMarkup() {
    refs.modalMainContainer.innerHTML = '';
}
