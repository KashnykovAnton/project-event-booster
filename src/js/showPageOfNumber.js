import getNumberOfPage from './getNumberOfPage';
// import {startPageLoad} from './markupGrid';
import {fetchAndMarkup} from './fetchAndMarkup';
import pagination from './pagination';
import changeClassActive from './changeClassActive';

function showPage(e) {
  e.preventDefault();

  getNumberOfPage(e);
  fetchAndMarkup();
  pagination();
  changeClassActive();

}

export default showPage;
