import fetchEvent from './apiService';
import { createMarkup } from './fetchAndMarkup';
import {states} from './getStates';

const selectCountries = document.querySelector('#js-select');

// const itemCountry = document.querySelector('option');
// const nameCountry = document.querySelectorAll('.main-location');

function choose() {
  fetchEvent(states.query, states.page, this.value)
    .then(createMarkup)
    .then(states.country = this.value)
    .catch(error => console.log(error));
}
selectCountries.addEventListener('change', choose);
