import fetchEvent from '../js/apiService';
import getRefs from './getRefs';
import { states } from './searchEvent';
import gridTpl from '../templates/grid.hbs';
import prePagination from './prePagination';
const refs = getRefs();

function createMarkup(data) {
  const markup = gridTpl(data._embedded.events);
  refs.mainListRef.innerHTML = markup;
  // prePagination();
}

function startPageLoad() {
  fetchEvent(states.query, states.page, states.country)
    .then(createMarkup)
    .catch(error => console.log(error));
}

export { startPageLoad, createMarkup };
