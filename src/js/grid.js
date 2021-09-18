import fetchEvent from '../js/apiService';
import getRefs from './getRefs';
import { states } from './searchEvent';
import gridTpl from '../templates/grid.hbs';
const refs = getRefs();

function createMarkup(data) {

  const markup = gridTpl(data._embedded.events);

  refs.mainListRef.innerHTML = markup;

}

function startPageLoad() {
  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));

  // states.page +=1;
}

//startPageLoad();

export default startPageLoad;

