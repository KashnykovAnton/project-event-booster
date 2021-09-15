import fetchEvent from '../js/apiService';
import getRefs from './getRefs';
import { states } from './searchEvent';

const refs = getRefs();

function createMarkup(data) {
  console.log(data.events[0].images);
  data.events.map(el => {
    refs.mainListRef.insertAdjacentHTML(
      'beforeend',
      `<li class="main-item">
        <img class="main-poster" src="${el.images[0].url}" alt="">
        <h2 class="main-name">${el.name}</h2>
        <p class="main-date">${el.dates.start.localDate}</p>
        <p class="main-location">${el.dates.timezone}</p>
        </li>`,
    );
  });
}

function startPageLoad() {
  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));

  states.page += 1;
}

startPageLoad();

export default createMarkup;

