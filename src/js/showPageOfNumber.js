import getNumberOfPage from './getNumberOfPage';
import startPageLoad from './grid.js';
import pagination from './pagination';
import changeClassActive from './changeClassActive';

function showPage(e) {
  e.preventDefault();

  getNumberOfPage(e);
  startPageLoad();
  pagination();
  changeClassActive();
}

export default showPage;
