import getNumberOfPage from './getNumberOfPage';
import {fetchAndMarkup} from './fetchAndMarkup';

function showPage(e) {
  e.preventDefault();

  getNumberOfPage(e);
  fetchAndMarkup();
}

export default showPage;
