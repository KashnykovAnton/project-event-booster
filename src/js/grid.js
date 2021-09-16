import fetchEvent from '../js/apiService';
import getRefs from './getRefs';
import { states } from './searchEvent';
import gridTpl from '../tamplates/grid.hbs';
const refs = getRefs();

function createMarkup(data) {
  const markup = gridTpl(data._embedded.events);
  console.log(markup);
  refs.mainListRef.insertAdjacentHTML('beforeend', markup);
}

function startPageLoad() {
  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));

  // states.page += 1;
}

// startPageLoad();

export default startPageLoad;
