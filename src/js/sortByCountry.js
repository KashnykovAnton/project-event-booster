import fetchEvent from './apiService';
import { createMarkup } from './fetchAndMarkup';
import {states} from './getStates';
import {refs} from './getRefs';

// const selectCountries = document.querySelector('#js-select'); //перенесли в refs

// const itemCountry = document.querySelector('option');
// const nameCountry = document.querySelectorAll('.main-location');

// function choose() {
//   fetchEvent(states.query, states.page, this.value)
//     .then(createMarkup)
//     .then(states.country = this.value)
//     .catch(error => console.log(error));
// }
// refs.selectByCountry.addEventListener('change', choose);
// console.log(refs.selectByCountry.this.value);
// console.log(this.value);