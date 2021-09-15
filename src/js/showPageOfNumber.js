import getNumberOfPage from './getNumberOfPage';
import startPageLoad from './grid.js';
import addPagination from './pagination';
import changeClassActive from './changeClassActive';

async function showPageOfNumber(e) {
  e.preventDefault();

  getNumberOfPage(e);
  startPageLoad ();
  await addPagination(e);
  

  changeClassActive(e); //
  
}

export default showPageOfNumber;
