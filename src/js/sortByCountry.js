import fetchEvent from './apiService';
import { createMarkup } from './fetchAndMarkup';
import { states } from './getStates';
import { refs } from './getRefs';

// const itemCountry = document.querySelector('option');
// const nameCountry = document.querySelectorAll('.main-location');

refs.selectCountry.addEventListener('change', changeCountry);

function changeCountry() {
  fetchEvent(states.query, states.page, this.value)
    .then((states.country = this.value))
    .then(createMarkup)
    .catch(error => console.log(error));
}
