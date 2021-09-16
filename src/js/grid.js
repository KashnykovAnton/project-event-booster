import fetchEvent from '../js/apiService';
import getRefs from './getRefs';
import { states } from './searchEvent';
import createCard from '../tamplates/cards.hbs';

const refs = getRefs();

function createMarkup(data) {

  refs.mainListRef.innerHTML = createCard(data._embedded.events);
};

function startPageLoad() {
  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));
}

export default startPageLoad;

