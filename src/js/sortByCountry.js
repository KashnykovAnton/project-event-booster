import fetchEvent from '../js/apiService';
import { createMarkup } from '../js/grid';
import { states } from './searchEvent';
const selectCountrys = document.querySelector('#js-select');

// const itemCountry = document.querySelector('option');
// const nameCountry = document.querySelectorAll('.main-location');

function choose() {
  fetchEvent(states.query, states.page, this.value)
    .then(createMarkup)
    .then(states.country = this.value)
    .catch(error => console.log(error));
}
selectCountrys.addEventListener('change', choose);
