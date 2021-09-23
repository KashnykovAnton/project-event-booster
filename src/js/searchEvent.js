// import {fetchEvent} from './apiService';
// import { createMarkup } from './fetchAndMarkup';
import { refs } from './getRefs';
import { states } from './getStates';
import { fetchAndMarkup, createMarkup } from './fetchAndMarkup';
// import { showAlert } from './pnotify';
import { showError, showNotify } from './pnotify';

import { geolocate } from './geolocator';
import { showLoader } from './loader';
import {fetchByEventAndCountry, fetchByEvent, fetchByCountry} from './apiService';
// console.log(refs);
// console.log(states);

refs.logoRef.addEventListener('click', logoClickResetForm);
refs.inputForm.addEventListener('change', inputFormHandler);
refs.selectCountry.addEventListener('change',selectFormHandler);

function onSearchEvent(e) {
  e.preventDefault();
  resetPage();
  clearPagination();
  states.query = e.currentTarget.elements.query.value.trim();

  console.log(states.query);
  //  console.log(refs.selectCountry.value);
   if (states.query && refs.selectCountry.value.length === 2) {
    fetchByEventAndCountry(states.query,refs.selectCountry.value)
    .then(data=> createMarkup(data))
    .catch(err=> console.log(err));
  }

  if (states.query && refs.selectCountry.value.length > 2) {
    fetchByEvent(states.query)
    .then(data=> createMarkup(data))
    .catch(err=> console.log(err));
  }

  if (!states.query && refs.selectCountry.value.length === 2) {
    fetchByCountry(refs.selectCountry.value)
    .then(data=> createMarkup(data))
    .catch(err=> console.log(err));
  }
 
  // fetchAndMarkup();
  clearMarkup();
  clearPagination();
  // incrementPage();
}

function inputFormHandler(e) {
  resetPage();
  clearPagination();
  const event = e.target.value.trim();
  const country = refs.selectCountry.value;
  if (event.length === 0) {
    refs.inputForm.value='';
    showError();
    return;
  }

  if (event && country.length === 2) {
    fetchByEventAndCountry(event, country)
      .then((data) => createMarkup(data))
      // .then(data=>createMarkup(data))
      .catch((err) => console.log(err));
  }

  fetchByEvent(event)
    .then((data) => createMarkup(data))
    .catch((err) => console.log(err));

    clearMarkup();
    clearPagination();
}

function selectFormHandler(e) {
  resetPage();
  clearPagination();
  const country = e.target.value;
  const event = refs.inputForm.value.trim();
  if (event && country.length === 2) {
    fetchByEventAndCountry(event, country)
      // .then((data) => checkedData(data))
      .then(data=>createMarkup(data))
      .catch((err) => console.log(err));
  }
  
  if (country.length > 2 ) {
    fetchByEvent(event)
    .then(data=>createMarkup(data))
    .catch(err=>console.log(err));
   
  }
  clearMarkup();
  clearPagination();
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
