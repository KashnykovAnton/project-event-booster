import { fetchEvent } from './apiService';
import { createMarkup } from './fetchAndMarkup';
import { states } from './getStates';
import { refs } from './getRefs';
import { showError } from './pnotify';
import { resetPage } from './searchEvent';

// const itemCountry = document.querySelector('option');
// const nameCountry = document.querySelectorAll('.main-location');

refs.selectCountry.addEventListener('change', changeCountry);

function changeCountry() {
  fetchEvent(states.query, states.page, this.value)
    .then((states.country = this.value))
    .then(createMarkup)
    .catch(showError);
  resetPage();
}
