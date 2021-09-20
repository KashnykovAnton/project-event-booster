import { fetchEvent } from '../js/apiService';
import { refs } from './getRefs';
import { states } from './getStates';
import gridTpl from '../templates/grid.hbs';
import pagination from './pagination';
import changeClassActive from './changeClassActive';
import { showError } from './pnotify';
import { clickListener } from './modal';

function fetchAndMarkup() {
  fetchEvent(states.query, states.page, states.country).then(createMarkup).catch(showError);
}

function createMarkup(data) {
  states.totalPages = data.page.totalPages < 41 ? data.page.totalPages : 41;
  const events = data._embedded.events.map(event => ({
    ...event,
    imageUrlMobile: event.images.find(image => image.width === 305 && image.height === 203),
    imageUrlMobile2x: event.images.find(image => image.width === 640 && image.height === 427),
    imageUrlTablet: event.images.find(image => image.width === 1024 && image.height === 576),
    imageUrlTablet2x: event.images.find(image => image.width === 1136 && image.height === 639),
    imageUrlDesktop: event.images.find(image => image.width === 1136 && image.height === 639),
    imageUrlDesktop2x: event.images.find(image => image.width === 2048 && image.height === 1152),
    imageUrlDefault: event.images.find(image => image.width === 1024 && image.height === 576),
  }));
  const markup = gridTpl(events);
  refs.mainListRef.innerHTML = markup;

  pagination();
  changeClassActive();
  clickListener();
  console.log(data.page);
}

export { fetchAndMarkup, createMarkup };
