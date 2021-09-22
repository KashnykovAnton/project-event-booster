// import {fetchEvent} from './apiService';
// import { createMarkup } from './fetchAndMarkup';
import { refs } from './getRefs';
import { states } from './getStates';
import { fetchAndMarkup } from './fetchAndMarkup';
// import { showAlert } from './pnotify';
import { showNotify } from './pnotify';

import { geolocate } from './geolocator';
import { showLoader } from './loader';
// console.log(refs);
// console.log(states);

refs.logoRef.addEventListener('click', logoClickResetForm);

function onSearchEvent(e) {
  e.preventDefault();
  states.query = e.currentTarget.elements.query.value;

  // if (states.query.trim() === '') {
  //   showAlert();
  //   return;
  // }

  resetPage();
  fetchAndMarkup();
  clearMarkup();
  clearPagination();
  // incrementPage();
}

function resetPage() {
  states.page = 1;
}

// function incrementPage() {
//   states.page += 1;
// }

function clearMarkup() {
  refs.mainListRef.innerHTML = '';
}
function clearPagination() {
  refs.paginationRef.innerHTML = '';
}

function logoClickResetForm() {
  refs.formRef.reset();
  clearMarkup();
  clearPagination();
  geolocate();
  showNotify();
  showLoader();
  console.log(states.country);
}

export { onSearchEvent, clearMarkup, clearPagination, resetPage };
