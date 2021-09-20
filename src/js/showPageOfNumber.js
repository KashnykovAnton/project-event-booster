import getNumberOfPage from './getNumberOfPage';
// import {startPageLoad} from './markupGrid';
import {createMarkup, fetchAndMarkup} from './fetchAndMarkup';
import pagination from './pagination';
import changeClassActive from './changeClassActive';
import fetchEvent from './apiService';
import { states } from './getStates';

function showPage(e) {
  e.preventDefault();

  getNumberOfPage(e);
  fetchEvent.fetchRandom(states.page).then(createMarkup);
  pagination();
  changeClassActive();

}

export default showPage;
